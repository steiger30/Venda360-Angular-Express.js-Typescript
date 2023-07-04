import { Product, ProductProperties } from "../../entities/product";
import { IProductsRepository } from "../../repositories/IProductsRepository";


export class UpdateProducts {
  constructor(private iProductsRepository: IProductsRepository){}
  async execute(req: ProductProperties, userId: string) {
    const product = new Product(req);
    return this.iProductsRepository.update(product.props, userId)
  }
}