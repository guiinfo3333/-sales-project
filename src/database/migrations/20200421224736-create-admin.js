'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('admins', {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull:false,
      },
      nameadmin: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      emailadmin: {
       type: Sequelize.STRING,
       allowNull: false
      },
      passwordadmin: {
       type: Sequelize.STRING,
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
    return queryInterface.dropTable('admins');
  }
};
