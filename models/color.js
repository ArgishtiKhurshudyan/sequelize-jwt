'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate(models) {
      const { Product } = models;
        Color.belongsToMany(Product, { foreignKey: 'color_id', through: 'ProductColors', as: 'colors' })
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