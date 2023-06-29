import { UserProperties } from '../../entities/user';
import bcrypt, { compare } from 'bcrypt';
import { prisma } from '../../prisma/cliente';
import { AuthUserProperties } from '../../shared/dto/authUserProperties';

export class PrismaUserRepostiory {
  async create(user: UserProperties): Promise<any> {
    try {
      const password = await bcrypt.hash(user.password, 12);
      const savedUser = await prisma.users.create({
        data: {
          name: user.fullName,
          email: user.email,
          password
        }
      })

      return savedUser
    } catch (error) {
      throw new Error('E-mail já existe');
    }
  }

  async isValidLogin(user: AuthUserProperties) {
    const isValidUser = await prisma.users.findUnique({ where: { email: user.email } })
    if (!isValidUser) {
      throw new Error('Usuário não encontrado');
    }
    const validPassword = await compare(user.password, isValidUser.password);
    if (!validPassword) {
      throw new Error('Senha inválida');
    }
    return isValidUser
  }

  async delete(id: number) {

    await prisma.users.delete({
      where: { id }
    })
    return { message: "Removido com sucesso" }
  }
} 