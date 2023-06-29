import ValidatorRules from "../shared/validators/validator-rules";

export type CustomerProperties = {
  id?: number,
  nome: string,
  cpf: string,
  endereco: string,
  email: string,
  telefone: string,
}

export class Customer {
  constructor(
    readonly props: CustomerProperties,
  ) {
    this.validateProperties(props);

  }

  private validateProperties(props: CustomerProperties) {
    const { nome, cpf, endereco, email, telefone } = props;

    ValidatorRules.values(nome, "nome")
      .required()
      .string();

    ValidatorRules.values(cpf, "cpf")
      .required()
      .cpf();
    ValidatorRules.values(endereco, "endereco")
      .required()
      .string();

    ValidatorRules.values(email, "email")
      .required()
      .string();

    ValidatorRules.values(telefone, "telefone")
      .required()
      .string();
  }
}