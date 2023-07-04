import { Request, Response, Router, response } from "express";
import { Customer, CustomerProperties } from "../entities/customer";
import { authenticate } from "../middlewares/authenticate";
import { CreateCustomers } from "../useCase/customers/CreateCustomers";
import { UpdateCustomers } from "../useCase/customers/UpdateCustomers";
import { DeleteCustomers } from "../useCase/customers/DeleteCustomers";
import { SequelizeCustomersRepository } from "../repositories/sequelize/SequelizeCustomersRepository";

interface AuthenticatedRequest extends Request {
  userid?: string;
}


const customerRoutes = Router();

customerRoutes.post("/", async (req: AuthenticatedRequest, res: Response) => {

  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }
  const customerProps: CustomerProperties = req.body;
  const customersRepository = new SequelizeCustomersRepository()
  const createCustomers = new CreateCustomers(customersRepository)

  await createCustomers.execute(customerProps, userId).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

customerRoutes.put("/", async (req: AuthenticatedRequest, res: Response) => {

  const userId = req.userid;
  if (!userId) {
    throw new Error("Is not userId")
  }
  const customerProps: CustomerProperties = req.body;
  const customersRepository = new SequelizeCustomersRepository()
  const updateCustomers = new UpdateCustomers(customersRepository)

  await updateCustomers.execute(customerProps, userId).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

customerRoutes.delete("/:id", async (req: AuthenticatedRequest, res: Response) => {
  const id = req.params.id;

  const customersRepository = new SequelizeCustomersRepository()
  const deleteCustomers = new DeleteCustomers(customersRepository);

  deleteCustomers.execute(id).then((response) => {
    return res.json(response)
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

customerRoutes.get("/", async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }
  const { pagLimit, pagOffset } = req.query

  let limit = Number(pagLimit);
  let offset = Number(pagOffset);

  if (!limit) {
    limit = 5;
  }
  if (!offset) {
    offset = 1;
  }
  
  const customersRepository = new SequelizeCustomersRepository()
  customersRepository.getall(limit, offset, userId).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})


export { customerRoutes }