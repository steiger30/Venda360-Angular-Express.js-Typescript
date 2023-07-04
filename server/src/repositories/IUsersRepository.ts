import { UserProperties } from "../entities/user"
import { AuthUserProperties } from "../shared/dto/authUserProperties"

export interface IUsersRepository  {
  create(user: UserProperties): Promise<any>
  isValidLogin(user: AuthUserProperties): Promise<any>
  delete(id: string): Promise<any>
}