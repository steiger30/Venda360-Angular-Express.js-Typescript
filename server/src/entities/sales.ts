import ValidatorRules from '../shared/validators/validator-rules';

export type SalesProperties = {
  id?: string,
  formaPagamento: string,
  valorApagar: string,
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string
}
export class Sales {

  constructor(readonly props: SalesProperties) {
    this.validateProperties(props);
  }
  private validateProperties(props: SalesProperties) {
    const { formaPagamento, valorApagar } = props;

    ValidatorRules.values(formaPagamento, "forma Pamgento")
      .required()
      .string();

    ValidatorRules.values(valorApagar, "valor Apagar")
      .required()
      .number();
  }

}
