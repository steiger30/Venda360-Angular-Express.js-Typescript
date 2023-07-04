import { Sales, SalesProperties } from "../../entities/sales";

export class CreateSales {
  async execute(req: SalesProperties, userId: string) {

    const sales = new Sales(req);
  }
}