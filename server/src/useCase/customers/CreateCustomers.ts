import { Customer, CustomerProperties } from "../../entities/customer"
import { ICustomersRepository } from "../../repositories/ICustomersRepository";

export class CreateCustomers {
  constructor(private iCustomersRepository: ICustomersRepository) { }
  async execute(req: CustomerProperties, userId: string) {

    const customer = new Customer(req);
    return this.iCustomersRepository.create(customer.props, userId)


  }
}