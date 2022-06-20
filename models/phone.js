'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][A-Z]*[a-z]*\d*$/,
          len: [2, 64],
        },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][A-Z]*[a-z]*\d*$/,
          len: [2, 32],
        },
      },
      manufactureYear: {
        type: DataTypes.DATEONLY,
        field: 'manufacture_year',
      },
      ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][A-Z]*[a-z]*\d*$/,
          len: [2, 64],
        },
      },
      screenDiagonal: {
        type: DataTypes.INTEGER,
        field: 'screen_diagonal',
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      nfc: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
