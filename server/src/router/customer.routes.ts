import { Request, Response, Router, response } from "express";
import { Customer, CustomerProperties } from "../entities/customer";
import { authenticate } from "../middlewares/authenticate";
import { CreateCustomers } from "../useCase/customers/CreateCustomers";
import { UpdateCustomers } from "../useCase/customers/UpdateCustomers";
import { DeleteCustomers } from "../useCase/customers/DeleteCustomers";

interface AuthenticatedRequest extends Request {
  userid?: number;
}


const customerRoutes = Router();

customerRoutes.post("/", async (req: AuthenticatedRequest, res: Response) => {

  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }
  const customerProps: CustomerProperties = req.body;
  const createCustomers = new CreateCustomers()

  await createCustomers.execute(customerProps, userId).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

customerRoutes.put("/", async (req: AuthenticatedRequest, res: Response) => {

  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }
  const customerProps: CustomerProperties = req.body;
  const updateCustomers = new UpdateCustomers()

  await updateCustomers.execute(customerProps, userId).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

customerRoutes.delete("/", async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.body;
  const deleteCustomers = new DeleteCustomers();
  deleteCustomers.execute(id).then((response) => {
    return res.json(response)
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})


export { customerRoutes }