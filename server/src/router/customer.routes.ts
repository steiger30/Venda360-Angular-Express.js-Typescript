import { Request, Response, Router } from "express";
import { Customer, CustomerProperties } from "../entities/customer";



const customerRoutes = Router();

customerRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const customerProps: CustomerProperties = req.body;
    const customer = new Customer(customerProps);
    return res.json(customer);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
})


export { customerRoutes }