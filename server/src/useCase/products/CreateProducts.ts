import { Product, ProductProperties } from "../../entities/product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

export class CreateProducts {
  constructor(private iProductsRepository: IProductsRepository){}
  async execute(req: ProductProperties, userId: string) {

    const product = new Product(req);
    return this.iProductsRepository.create(product.props, userId)
  }
}