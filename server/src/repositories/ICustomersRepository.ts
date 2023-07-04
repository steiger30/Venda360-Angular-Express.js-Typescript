import { CustomerProperties } from "../entities/customer";

export interface ICustomersRepository {
  create(customer: CustomerProperties, userId: string): Promise<any>
  update(customer: CustomerProperties, userId: string): Promise<any>
  delete(id: string): Promise<any>
  getall(limit: number, page: number, userId: string): Promise<any>
}