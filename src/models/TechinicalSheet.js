const { Model,DataTypes } = require('sequelize');

class TechinicalSheet extends Model{
	static init(sequelize){
		super.init({
            model : DataTypes.STRING,
            dimension : DataTypes.STRING,
            color : DataTypes.STRING,
            connectivity : DataTypes.STRING,
            weight : DataTypes.STRING,
            brand : DataTypes.STRING,
            display : DataTypes.STRING,
            audio : DataTypes.STRING,
            sensor : DataTypes.STRING,
            chip : DataTypes.STRING,
            camera : DataTypes.STRING,
            frequency : DataTypes.STRING,
            processor : DataTypes.STRING,
            memory : DataTypes.STRING,
            drums : DataTypes.STRING,
            inches : DataTypes.STRING,
            resolution : DataTypes.STRING,
            connections : DataTypes.STRING,
            operationalsystem : DataTypes.STRING,
            bluetooth : DataTypes.STRING,
            powervoltage : DataTypes.STRING,
            warranty : DataTypes.STRING,
            wifi : DataTypes.STRING,
            screen : DataTypes.STRING,
            series : DataTypes.STRING
		},{
            sequelize,
            tableName: 'techinicalsheet',
		})
	}

	

} 


module.exports = TechinicalSheet;