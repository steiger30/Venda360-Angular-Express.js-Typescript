import { Sales, SalesProperties } from "../../entities/sales";

export class CreateSales {
  async execute(req: SalesProperties, userId: number) {

    const sales = new Sales(req);
  }
}