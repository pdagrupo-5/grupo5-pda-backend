const Sequelize = require('sequelize');
const db = require('../connection/db');

const Estado = db.define('Estado' , {

    idestado :{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true , 
        primaryKey: true
    },
    entrada :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
   saida :{
        type : Sequelize.DataTypes.STRING,
        allowNull: false
   }
    
});

module.exports = Estado;