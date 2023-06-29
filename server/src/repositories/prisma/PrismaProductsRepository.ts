import { ProductProperties } from "../../entities/product";
import { prisma } from "../../prisma/cliente";

export class PrismaProductsRepository {
  async create(product: ProductProperties, userId: number) {
    const { nomeProduto, preco, descricao } = product

    await prisma.products.create({
      data: {
        nomeProduto, preco, descricao, userId
      }
    })
    return { message: "Produto cadastrado com sucesso" }
  }

  async update(product: ProductProperties) {
    const { id, nomeProduto, preco, descricao } = product
    await prisma.products.update({
      where: { id },
      data: {
        nomeProduto, preco, descricao,
      }
    })
    return { message: "Atualizado com sucesso" }
  }

  async delete(id: number) {
    await prisma.products.delete({
      where: { id }
    })
    return { message: "Removido com sucesso" }
  }
  async getall(userId: number) {
    const user = await prisma.products.findMany({
      where: { userId }
    })
    return user
  }
}