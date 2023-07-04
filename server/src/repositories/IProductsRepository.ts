import { ProductProperties } from "../entities/product"

export interface IProductsRepository {
  create(product: ProductProperties, userId: string): Promise<any>
  update(product: ProductProperties, userId: string): Promise<any>
  delete(id: string): Promise<any>
  getall(limit: number, offset: number,  userId: string): Promise<any>
}