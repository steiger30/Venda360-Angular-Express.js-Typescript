import { ProductProperties } from "../../entities/product";
import productModels from "../../models/productModels ";
import { IProductsRepository } from "../IProductsRepository";

export class SequelizeProductsRepository implements IProductsRepository {
  async create(product: ProductProperties, userId: string) {
    const { nomeProduto, preco, descricao } = product
    await productModels.create({
      nomeProduto, preco, descricao, userId
    })
    return { message: "Produto cadastrado com sucesso" }
  }

  async update(product: ProductProperties) {
    const { id, nomeProduto, preco, descricao } = product
    await productModels.update(
      {
        nomeProduto, preco, descricao,
      },
      { where: { id } },
    )
    return { message: "Atualizado com sucesso" }
  }

  async delete(id: string) {
    await productModels.destroy({
      where: { id }
    })
    return { message: "Removido com sucesso" }
  }
  async getall(limit: number, page: number, userId: string) {

    const user = await productModels.findAll({
      where: { userId },
      offset: (page - 1) * limit,
      limit

    })
    return user
  }
}