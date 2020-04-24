
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('imageproduct', {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull:false,
      },
      nameimageproduct: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      size: {
       type: Sequelize.STRING,
       allowNull: false
      },
      key: {
       type: Sequelize.STRING,
       allowNull: false
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false
       },
       product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'product',key:'id'},
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE',
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
    return queryInterface.dropTable('imageproduct');
  }
};
