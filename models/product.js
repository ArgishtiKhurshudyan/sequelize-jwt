'use strict';
import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      const {User, Color} = models;
      Product.belongsTo(User, {foreignKey: 'user_id'})
      Product.belongsToMany(Color, {
        foreignKey: 'product_id',
        joinTableAttributes: [],
        through: {model: 'ProductColors', joinTableAttributes: [], attributes: ['id']},
        paranoid: true, raw: true,
        as: 'colors'
      })
    }
  }

  Product.init({
    productName: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: "cascade",
    },

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};