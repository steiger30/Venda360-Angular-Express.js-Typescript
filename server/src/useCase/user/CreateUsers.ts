import { User, UserProperties } from "../../entities/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";


export class CreateUsers {
  constructor(private iUsersRepository: IUsersRepository) { }
  async execute(req: UserProperties) {
    const user = new User(req);
    return this.iUsersRepository.create(user.props)

  }
}