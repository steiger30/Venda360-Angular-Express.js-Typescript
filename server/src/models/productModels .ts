import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import usersModels from './usersModels';
import { ProductProperties } from '../entities/product';
import { v4 as uuidv4 } from 'uuid';

class Product extends Model<ProductProperties> {
  declare id: string;
  declare nomeProduto: string;
  declare preco: string;
  declare descricao: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

const productModels = Product.init({
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  nomeProduto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
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
    tableName: 'products'
  }
)

usersModels.hasMany(productModels, { foreignKey: 'userId' });

export default productModels;