import { Request, Response, Router, response } from "express";
import { Product, ProductProperties } from "../entities/product";
import { CreateProducts } from "../useCase/products/CreateProducts";
import { UpdateProducts } from "../useCase/products/UpdateProducts";
import { DeleteProducts } from "../useCase/products/DeleteProducts";
import { SequelizeProductsRepository } from "../repositories/sequelize/SequelizeProductsRepository";

interface AuthenticatedRequest extends Request {
  userid?: string;
}


const productsRoutes = Router();

productsRoutes.post("/", async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }

  const productProperties: ProductProperties = req.body;
  const productsRepository = new SequelizeProductsRepository()
  const createProducts = new CreateProducts(productsRepository)

  createProducts.execute(productProperties, userId).then(response => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

productsRoutes.put("/", async (req: AuthenticatedRequest, res: Response) => {
  const productProperties: ProductProperties = req.body;
  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }

  const productsRepository = new SequelizeProductsRepository()
  const updateProducts = new UpdateProducts(productsRepository)

  updateProducts.execute(productProperties, userId).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

productsRoutes.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const productsRepository = new SequelizeProductsRepository()
  const deleteProducts = new DeleteProducts(productsRepository)

  deleteProducts.execute(id).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

productsRoutes.get("/", async (req: AuthenticatedRequest, res: Response) => {
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

  console.log( "aqui ", pagLimit, pagOffset)

  const productsRepository = new SequelizeProductsRepository()

  productsRepository.getall(limit, offset, userId).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})

export { productsRoutes };