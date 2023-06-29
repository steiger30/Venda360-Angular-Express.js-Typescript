import ValidatorRules from '../shared/validators/validator-rules';

export type SalesProperties = {
  id?: number,
  formaPagamento: string,
  valorApagar: string,
  customersId: number;
  products: number[];
  userId: number;
}
export class Sales {

  constructor(readonly props: SalesProperties) {
    this.validateProperties(props);
  }
  private validateProperties(props: SalesProperties) {
    const { formaPagamento, valorApagar, customersId, products } = props;

    ValidatorRules.values(formaPagamento, "forma Pamgento")
      .required()
      .string();

    ValidatorRules.values(valorApagar, "valor Apagar")
      .required()
      .number();

    ValidatorRules.values(customersId, "customer")
      .required()

    ValidatorRules.values(products, "produtos")
      .required()

  }

}
