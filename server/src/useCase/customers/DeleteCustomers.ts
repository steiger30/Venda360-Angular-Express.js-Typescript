
import { PrismaCustomersRepository } from "../../repositories/prisma/PrismaCustomersRepository";

export class DeleteCustomers {
  async execute(id: number) {
    const prismaCustomersRepository = new PrismaCustomersRepository()
    return prismaCustomersRepository.delete(id)
  }
}