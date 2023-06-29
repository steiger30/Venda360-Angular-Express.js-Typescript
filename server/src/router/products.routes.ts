import { Request, Response, Router, response } from "express";
import { Product, ProductProperties } from "../entities/product";
import { CreateProducts } from "../useCase/products/CreateProducts";
import { UpdateProducts } from "../useCase/products/UpdateProducts";
import { DeleteProducts } from "../useCase/products/DeleteProducts";

interface AuthenticatedRequest extends Request {
  userid?: number;
}


const productsRoutes = Router();

productsRoutes.post("/", async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userid;
  if (!userId) {
    throw ("Is not userId")
  }
  const productProperties: ProductProperties = req.body;
  const createProducts = new CreateProducts()
  createProducts.execute(productProperties, userId).then(response => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})
productsRoutes.put("/", async (req: Request, res: Response) => {
  const productProperties: ProductProperties = req.body;
  const updateProducts = new UpdateProducts()
  updateProducts.execute(productProperties).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})
productsRoutes.delete("/", async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteProducts = new DeleteProducts()
  deleteProducts.execute(id).then((response) => {
    return res.json(response);
  }).catch((error: any) => {
    return res.status(400).json({ error: error.message });
  })
})
productsRoutes.get("/", async (req: Request, res: Response) => {

})

export { productsRoutes };