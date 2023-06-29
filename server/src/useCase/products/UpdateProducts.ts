import { Product, ProductProperties } from "../../entities/product";
import { PrismaProductsRepository } from "../../repositories/prisma/PrismaProductsRepository";

export class UpdateProducts {
  async execute(req: ProductProperties) {
    const product = new Product(req);
    const prismaProductsRepository = new PrismaProductsRepository();
    return prismaProductsRepository.update(product.props)
  }
}