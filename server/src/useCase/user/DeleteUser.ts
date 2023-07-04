import { User, UserProperties } from "../../entities/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";


export class DeleteUsers {
  constructor(private iUsersRepository: IUsersRepository) { }
  async execute(req: UserProperties) {
    const user = new User(req);
    if(!user.props.id){
      throw new Error('');
    }
    return this.iUsersRepository.delete(user.props.id)
 
  }
}