import { Customer, CustomerProperties } from "../../entities/customer";
import { PrismaCustomersRepository } from "../../repositories/prisma/PrismaCustomersRepository";

export class UpdateCustomers {
  async execute(req: CustomerProperties, userId: number) {
    const customer = new Customer(req);
    const prismaCustomersRepository = new PrismaCustomersRepository()
    return prismaCustomersRepository.update(customer.props, userId)
  }
}