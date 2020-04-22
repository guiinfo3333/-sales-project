'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull:false,
      },
      nameproduct: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: false,
     },
     description: {
      type: Sequelize.STRING,
      allowNull: false,
     },
     productcategory_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references: {model:'productcategory',key:'id'},
      onUpdate : 'CASCADE',
      onDelete : 'CASCADE'
     },
     techinicalsheet_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references: {model:'techinicalsheet',key:'id'},
      onUpdate : 'CASCADE',
      onDelete : 'CASCADE'
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
    return queryInterface.dropTable('product');
  }
};
