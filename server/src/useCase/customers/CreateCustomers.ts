import { Customer, CustomerProperties } from "../../entities/customer"
import { PrismaCustomersRepository } from "../../repositories/prisma/PrismaCustomersRepository"
export class CreateCustomers {
  constructor() {}
  async execute(req: CustomerProperties, userId: number) {

    const customer = new Customer(req);
    const prismaCustomersRepository = new PrismaCustomersRepository()
    return prismaCustomersRepository.create(customer.props, userId)

  }
}