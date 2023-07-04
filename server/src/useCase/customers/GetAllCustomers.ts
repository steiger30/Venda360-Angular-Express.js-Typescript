
import { ICustomersRepository } from "../../repositories/ICustomersRepository";

export class GetAllCustomers {
  constructor(private iCustomersRepository: ICustomersRepository) { }
  async execute(id: string) {
    return this.iCustomersRepository.getall(id)
  }
}