/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';
const {DataTypes} =require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Menus', {
      id: {
        type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
      },
    
      item: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      category: {
        type: Sequelize.ENUM("appitizer","pakistani","drinks","sweets"),
        allowNull: false
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
    

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Menus');
  }
};
