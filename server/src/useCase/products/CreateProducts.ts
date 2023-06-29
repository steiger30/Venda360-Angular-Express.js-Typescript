import { Product, ProductProperties } from "../../entities/product";
import { PrismaProductsRepository } from "../../repositories/prisma/PrismaProductsRepository";

export class CreateProducts {
  async execute(req: ProductProperties, userId: number) {

    const product = new Product(req);
    const prismaProductsRepository = new PrismaProductsRepository();
    return prismaProductsRepository.create(product.props, userId)
  }
}