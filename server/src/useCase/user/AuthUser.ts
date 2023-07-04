import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AuthUserProperties } from "../../shared/dto/authUserProperties"
import { sign } from 'jsonwebtoken';

export class AuthUser {
  constructor(private iUsersRepository: IUsersRepository) { }
  async execute(req: AuthUserProperties) {

    const isValidUser = await this.iUsersRepository.isValidLogin(req)
    const chaveSecreta =  process.env.SECRET;

    if (!chaveSecreta) {
      throw new Error('Chave secreta não encontrada');
    }
    
    const payload = { id: isValidUser.id, nome: isValidUser.nome, email: isValidUser.email };

    const token = sign(payload, chaveSecreta, { expiresIn: "6d" });
    
    return token
  }
}