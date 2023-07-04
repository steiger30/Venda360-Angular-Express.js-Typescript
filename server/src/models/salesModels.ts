import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import user from "./usersModels";
import customer from "./customerModels";
import product from "./productModels ";
import { SalesProperties } from "../entities/sales";
import { v4 as uuidv4 } from 'uuid';

class Sales extends Model<SalesProperties> {
  declare id: string;
  declare formaPagamento: string;
  declare valorApagar: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

const salesModels = Sales.init({
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: () => uuidv4(),
    autoIncrement: true,
  },
  formaPagamento: {
    type: DataTypes.STRING,
  },
  valorApagar: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
},
  {
    sequelize,
    tableName: 'sales'
  }
);

user.hasMany(salesModels, { foreignKey: 'userId' });

customer.hasMany(salesModels, { foreignKey: 'customersId' });

product.belongsToMany(salesModels, { through: 'sales_products' });

export default salesModels