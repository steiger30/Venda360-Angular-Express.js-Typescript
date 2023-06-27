import { Request, Response, Router } from "express";
import { Product, ProductProperties } from "../entities/product";



const productsRoutes = Router();

productsRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const productProperties: ProductProperties = req.body;
    const product = new Product(productProperties);
    return res.json(product);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
})
productsRoutes.put("/", async (req: Request, res: Response) => {
  try {
    const productProperties: ProductProperties = req.body;
    const product = new Product(productProperties);
    return res.json(product);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
})
productsRoutes.put("/", async (req: Request, res: Response) => {
  try {
    const productProperties: ProductProperties = req.body;
    const product = new Product(productProperties);
    return res.json(product);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
})

productsRoutes.get("/", async (req: Request, res: Response) => {

})

export { productsRoutes };