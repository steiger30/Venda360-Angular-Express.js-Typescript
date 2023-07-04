import { IProductsRepository } from "../../repositories/IProductsRepository";

export class GetProducts {
  constructor(private iProductsRepository: IProductsRepository){}
  async execute() {

  }
}