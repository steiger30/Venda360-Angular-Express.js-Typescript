import { Router } from "express";
import { customerRoutes } from "./customer.routes";
import { productsRoutes } from "./products.routes";
import { salesRoutes } from "./sales.routes";

const routes = Router();

routes.use('/cliente', customerRoutes);
routes.use('/produto', productsRoutes);
routes.use('/venda', salesRoutes);


export { routes };