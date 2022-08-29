import connection from '../models/connection';
import UserModel from '../models/users.model';
import IUsers from '../interfaces/users.interface';
import userValidate from '../middlewares/user.validate';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUsers): Promise<IUsers> {
    const {
      usernameValidate,
      classValidate,
      levelValidate,
      passwordValidate,
    } = userValidate;

    usernameValidate(user);
    classValidate(user);
    levelValidate(user);
    passwordValidate(user);

    const result = await this.model.create(user);

    return result;
  }
}
