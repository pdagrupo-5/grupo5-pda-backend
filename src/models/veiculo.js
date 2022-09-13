const Sequelize = require('sequelize');
const db = require('../connection/db');

const veiculo = db.define('veiculo' , {

    idveiculo :{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true , 
        primaryKey: true
    },
    placa :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    ano :{
        type : Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    cor :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    nome : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    propietario : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    
});

module.exports = veiculo;