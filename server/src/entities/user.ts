import ValidatorRules from '../shared/validators/validator-rules';

export type UserProperties = {
  id?: string,
  fullName: string,
  email: string,
  password: string;
  contAcesso: number;
}
export class User {
  constructor(readonly props: UserProperties) {
    this.validateProperties(props);
  }
  private validateProperties(props: UserProperties) {
    const { fullName, email, password } = props;

    ValidatorRules.values(fullName, "Nome completo")
      .required()
      .string()
      .minLength(8);

    ValidatorRules.values(email, "email")
      .required()
      .string();

    ValidatorRules.values(password, "senha")
      .required()
      .minLength(8);

  }
}
