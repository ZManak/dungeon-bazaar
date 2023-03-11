const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
class Maker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, {
        foreignKey: 'makerId',
        onDelete: 'CASCADE',
        hooks: true

      });
    }
  };

  Maker.init({
    id: 
      {type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false},
    makerName: {
        type: DataTypes.STRING,
        allowNull:false},
    address: 
        {type: DataTypes.STRING,
        allowNull:false},
    cif:
        {type: DataTypes.STRING,
        allowNull:false
        }
    }
  , {
    sequelize,
    modelName: 'Maker',
    timestamps: false
  });

  return Maker;
}