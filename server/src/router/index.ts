import { Router } from "express";
import { customerRoutes } from "./customer.routes";
import { productsRoutes } from "./products.routes";
import { salesRoutes } from "./sales.routes";
import { userRoutes } from "./user.routes";
import { authenticate } from "../middlewares/authenticate";

const routes = Router();

routes.use('/cliente', authenticate, customerRoutes);
routes.use('/produto', authenticate, productsRoutes);
routes.use('/venda', authenticate, salesRoutes);
routes.use('/users', userRoutes);


export { routes };