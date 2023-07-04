import { CustomerProperties } from "../../entities/customer";
import { ICustomersRepository } from "../ICustomersRepository";
import customerModels from "../../models/customerModels";

export class SequelizeCustomersRepository implements ICustomersRepository {
  async create(customer: CustomerProperties, userId: string) {
    const { nome, cpf, endereco, email, telefone } = customer
    console.log("as", userId)
    console.log("as", customer)
    try {
      await customerModels.create({
        nome, cpf, endereco, email, telefone, userId
      })
      return { message: "Cliente cadastrado com sucesso" }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async update(customer: CustomerProperties, userId: string) {
    const { id, nome, cpf, endereco, email, telefone } = customer

    await customerModels.update(
      {
        nome, cpf, endereco, email, telefone
      },
      {
        where: { id },
      }
    )
    return { message: "Atualizado com sucesso" }
  }

  async delete(id: string) {
    await customerModels.destroy({
      where: { id }
    })
    return { message: "Removido com sucesso" }
  }
  async getall(limit: number, page: number, userId: string) {
    const user = await customerModels.findAll({
      where: { userId },
      offset: (page - 1) * limit,
      limit
    })
    return user
  }
}