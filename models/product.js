'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Maker,{
        foreignKey: 'makerId'}
      );
    }
  };

  Product.init({
    itemName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.DECIMAL,
    makerId: DataTypes.UUID
    }
  , {
    sequelize,
    modelName: 'Product',
    timestamps: false
  });
  
  return Product;
}

