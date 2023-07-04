import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import { CustomerProperties } from '../entities/customer';
import { v4 as uuidv4 } from 'uuid';
import usersModels from './usersModels';

class Customer extends Model<CustomerProperties> {
  declare id: string;
  declare nome: string;
  declare cpf: string;
  declare email: string;
  declare endereco: string;
  declare telefone: string;
  declare updatedAt: Date;
  declare createdAt: Date;
  
}

const customerModels = Customer.init({
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
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
  },
},
  {
    sequelize,
    tableName: 'customers'
  }
)

usersModels.hasMany(customerModels, { foreignKey: 'userId' });

export default customerModels;