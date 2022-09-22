/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';
const {DataTypes} = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
      },
    
      orderItems: {
        //type: Sequelize.ARRAY(Sequelize.TEXT),
        type:DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      totalPrice: {
        type :DataTypes.INTEGER,
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
    return queryInterface.dropTable('Orders');
  }
};
