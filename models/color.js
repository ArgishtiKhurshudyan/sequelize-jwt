'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate(models) {
      const { Product } = models;
        Color.belongsToMany(Product, { foreignKey: 'color_id', joinTableAttributes: [],
          through: {model: 'ProductColors', joinTableAttributes: [], attributes: []}, as: 'products' , paranoid: true, raw: true})
    }
  }

  Color.init({
    colorName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};