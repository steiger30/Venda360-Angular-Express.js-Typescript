import { PrismaUserRepostiory } from "../../repositories/prisma/PrismaUserRepostiory"
import { AuthUserProperties } from "../../shared/dto/authUserProperties"
import { sign } from 'jsonwebtoken';

export class AuthUser {
  constructor() { }
  async execute(req: AuthUserProperties) {
    const prismaUserRepostiory = new PrismaUserRepostiory()
    const isValidUser = await prismaUserRepostiory.isValidLogin(req)
    const chaveSecreta = process.env.SECRET;

    if (!chaveSecreta) {
      throw new Error('Chave secreta não encontrada');
    }
    
    const payload = { id: isValidUser.id, nome: isValidUser.name, email: isValidUser.email };

    const token = sign(payload, chaveSecreta, { expiresIn: "6d" });
    
    return token
  }
}