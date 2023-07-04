import { UserProperties } from '../../entities/user';
import bcrypt, { compare } from 'bcrypt';
import { AuthUserProperties } from '../../shared/dto/authUserProperties';
import { IUsersRepository } from '../IUsersRepository';
import usersModels from '../../models/usersModels';

export class SequelizeUsersRepostiory implements IUsersRepository {


  async create(user: UserProperties): Promise<any> {
    console.log(user)
    try {
      const password = await bcrypt.hash(user.password, 12);
      const savedUser = await usersModels.create({
        nome: user.fullName,
        email: user.email,
        password
      })

      return savedUser
    } catch (error) {
      throw new Error('E-mail já existe');
    }
  }

  async isValidLogin(user: AuthUserProperties) {
    const isValidUser = await usersModels.findOne({
      where: { email: user.email }
    })
    if (isValidUser === null) {
      throw new Error('Usuário não encontrado');
    }
    const validPassword = await compare(user.password, isValidUser.password);
    if (!validPassword) {
      throw new Error('Senha inválida');
    }
    return isValidUser
  }

  async delete(id: string) {

    await usersModels.destroy({
      where: { id }
    })
    return { message: "Removido com sucesso" }
  }
} 