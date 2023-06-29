import { CustomerProperties } from "../../entities/customer";
import { prisma } from "../../prisma/cliente";

export class PrismaCustomersRepository {
  async create(customer: CustomerProperties, userId: number) {
    const { nome, cpf, dataNascimento, endereco, email, telefone } = customer

    try {
      await prisma.customers.create({
        data: {
          nome, cpf, dataNascimento, endereco, email, telefone, userId
        }
      })
      return { message: "Cliente cadastrado com sucesso" }
    } catch (error) {
      throw new Error('E-mail ou cpf já cadastraro');
    }


  }

  async update(customer: CustomerProperties, userId: number) {
    const { id, nome, cpf, dataNascimento, endereco, email, telefone } = customer
    await prisma.customers.update({
      where: { id },
      data: {
        nome, cpf, dataNascimento, endereco, email, telefone
      }
    })
    return { message: "Atualizado com sucesso" }
  }

  async delete(id: number) {
    await prisma.customers.delete({
      where: { id }
    })
    return { message: "Removido com sucesso" }
  }
}