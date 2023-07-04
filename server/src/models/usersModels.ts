import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import customerModels from './customerModels';
import { v4 as uuidv4 } from 'uuid';

export type UserAttributes = {
  id?: number,
  nome: string,
  contAcesso: number,
  email: string,
  password: string;
  createdAt?: Date
  updatedAt?: Date
}

class User extends Model<UserAttributes> {
  declare createdAt: Date;
  declare updatedAt: Date;
  declare id: string;
  declare nome: string;
  declare email: string;
  declare password: string;
  declare contAcesso: number;
}


 const usersModels = User.init({
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  contAcesso: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
  }
},
  {
    sequelize,
    tableName: 'users'
  }
)

export default usersModels;