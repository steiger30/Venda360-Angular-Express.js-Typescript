import { SalesProperties } from "../../entities/sales";
import { prisma } from "../../prisma/cliente";

export class PrismaSalesRepository {
  async create(req: SalesProperties, userId: number) {
    const { formaPagamento, valorApagar, customersId, products } = req
 
    await prisma.sales.create({
      data: {
        formaPagamento, valorApagar, customersId, userId
      }
    })
  }
}