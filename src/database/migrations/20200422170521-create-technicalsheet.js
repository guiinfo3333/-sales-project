'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('techinicalsheet', {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull:false,
      },
      model: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      dimension: {
       type:Sequelize.STRING,
       allowNull:true,
      },
      color: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       connectivity: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       weight: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       brand: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       display: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       audio: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       sensor: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       chip: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       camera: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       frequency: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       processor: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       memory: {
        type:Sequelize.STRING,
        allowNull:true,
       }, 
      drums: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       inches: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       resolution: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       connections: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       operationalsystem: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       bluetooth: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       powervoltage: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       warranty: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       wifi: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       screen: {
        type:Sequelize.STRING,
        allowNull:true,
       },
       series: {
        type:Sequelize.STRING,
        allowNull:true,
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
    return queryInterface.dropTable('techinicalsheet');
  }
};
