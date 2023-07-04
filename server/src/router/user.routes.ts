import { Request, Response, Router } from "express";
import { User, UserProperties } from "../entities/user";
import { CreateUsers } from "../useCase/user/CreateUsers";

import { DeleteUsers } from "../useCase/user/DeleteUser";
import { AuthUser } from "../useCase/user/AuthUser";
import { authenticate } from "../middlewares/authenticate";
import { SequelizeUsersRepostiory } from "../repositories/sequelize/SequelizeUsersRepostiory";

interface AuthenticatedRequest extends Request {
  userid?: string;
}


const userRoutes = Router();

userRoutes.post("/", async (req: Request, res: Response) => {

  const usersRepostiory = new SequelizeUsersRepostiory()
  const createdUser = new CreateUsers(usersRepostiory)
  createdUser.execute(req.body).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })


})

userRoutes.post("/auth", async (req: Request, res: Response) => {

  const usersRepostiory = new SequelizeUsersRepostiory()
  const authUser = new AuthUser(usersRepostiory)
  authUser.execute(req.body).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

userRoutes.delete("/", authenticate, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }
  const usersRepostiory = new SequelizeUsersRepostiory()
  const deletUser = await usersRepostiory.delete(userId)
  return deletUser
})

userRoutes.get("/", authenticate, async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }
  const usersRepostiory = new SequelizeUsersRepostiory()
  usersRepostiory.get(userId).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})




export { userRoutes };