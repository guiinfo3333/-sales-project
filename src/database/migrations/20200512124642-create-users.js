'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull:false,
      },
      name: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      email: {
       type: Sequelize.STRING,
       allowNull: false
      },
      cpf: {
       type: Sequelize.STRING,
       allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
       },
       phone_number: {
        type: Sequelize.STRING,
        allowNull: false
       },
       country: {
        type: Sequelize.STRING,
        allowNull: false
       },
       birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false
       },
      created_at: {
       type:Sequelize.DATE,
       allowNull:false,
      },
      updated_at: {
       type: Sequelize.DATE,
       allowNull: false,
      }

     });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
