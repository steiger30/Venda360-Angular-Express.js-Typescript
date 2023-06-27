import ValidationError from "../errors/validation.error";
import { validateCPF } from "../utils/validateCpf";

export default class ValidatorRules {

  private constructor(private value: any, private property: string) { }

  static values(value: any, propety: string) {
    return new ValidatorRules(value, propety);
  }

  required(): this {
    if (this.value === null || this.value === undefined || this.value === "") {
      throw new ValidationError(`The ${this.property} is requider`);
    }
    return this
  }

  string(): this {
    if (typeof this.value !== "string") {
      throw new ValidationError(`The ${this.property} must be a string`)
    }
    return this
  }

  number(): this {
    if (typeof this.value !== "number") {
      throw new ValidationError(`The ${this.property} must be a number`)
    }
    return this
  }

  maxLength(max: number): this {
    if (this.value.length === max) {
      throw new ValidationError(`The ${this.property} must be less or equal than ${max} characters`)
    }
    return this
  }
  cpf(): this {
    if (!validateCPF(this.value)) {
      throw new ValidationError(`O CPF é inválido`)
    }
    return this
  }
}