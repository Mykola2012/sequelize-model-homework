'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      manufactureYear: {
        type: Sequelize.DATEONLY,
        field: 'manufacture_year',
      },
      ram: {
        type: Sequelize.INTEGER,
      },
      processor: {
        type: Sequelize.STRING,
      },
      screenDiagonal: {
        type: Sequelize.FLOAT,
        field: 'screen_diagonal',
      },
      nfc: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Phones');
  },
};
