import { User, UserProperties } from "../../entities/user";
import { PrismaUserRepostiory } from "../../repositories/prisma/PrismaUserRepostiory";


export class DeleteUsers {
  constructor() { }
  async execute(req: UserProperties) {
    const user = new User(req);
    const prismaUserRepostiory = new PrismaUserRepostiory()
    const createdUser = await prismaUserRepostiory.delete(user.props)
    return createdUser
  }
}