import { Request, Response, Router, response } from "express";
import { Sales, SalesProperties } from "../entities/sales";
import { CreateSales } from "../useCase/sales/CreateSales";

interface AuthenticatedRequest extends Request {
  userid?: string;
}

const salesRoutes = Router();

salesRoutes.post("/", async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }
  const salesProperties: SalesProperties = req.body;
  const createSales = new CreateSales()
  createSales.execute(salesProperties, userId).then((response) => {

    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})


export { salesRoutes };