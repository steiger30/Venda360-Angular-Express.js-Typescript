import { Request, Response, Router } from "express";
import { User, UserProperties } from "../entities/user";
import { CreateUsers } from "../useCase/user/CreateUsers";
import { PrismaUserRepostiory } from "../repositories/prisma/PrismaUserRepostiory";
import { DeleteUsers } from "../useCase/user/DeleteUser";
import { AuthUser } from "../useCase/user/AuthUser";
import { authenticate } from "../middlewares/authenticate";

interface AuthenticatedRequest extends Request {
  userid?: number;
}


const userRoutes = Router();

userRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const createdUser = new CreateUsers()
    const user = await createdUser.execute(req.body)
    return res.json(user);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }

})

userRoutes.post("/auth", async (req: Request, res: Response) => {
  try {
    const authUser = new AuthUser()
    const isValidLoginToken = await authUser.execute(req.body)
    return res.json(isValidLoginToken);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }

})

userRoutes.delete("/", authenticate, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }
  const prismaUserRepostiory = new PrismaUserRepostiory()
  const ExluiUser = await prismaUserRepostiory.delete(userId)
  return ExluiUser
})




export { userRoutes };