import ValidatorRules from '../shared/validators/validator-rules';
import { Customer } from './customer';
import { Product } from './product';

export type SalesProperties = {
  id?: number,
  formaPamgento: string,
  valorApagar: number,
  customer: Customer;
  products: Product[];
}
export class Sales {

  constructor(readonly props: SalesProperties) {
    this.validateProperties(props);
  }
  private validateProperties(props: SalesProperties) {
    const { formaPamgento, valorApagar, customer, products } = props;

    ValidatorRules.values(formaPamgento, "forma Pamgento")
      .required()
      .string();

    ValidatorRules.values(valorApagar, "valor Apagar")
      .required()
      .number();

    ValidatorRules.values(customer, "customer")
      .required()

    ValidatorRules.values(products, "produtos")
      .required()

  }

}
