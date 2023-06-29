import { PrismaProductsRepository } from "../../repositories/prisma/PrismaProductsRepository";

export class DeleteProducts {
  async execute(id: number) {
    const prismaProductsRepository = new PrismaProductsRepository();
    return prismaProductsRepository.delete(id)
  }
}