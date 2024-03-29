const Sequelize = require('sequelize');
const db = require('../connection/db');

const usuario = db.define('teste' , {
    id :{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true , 
        primaryKey: true
    },
    nome :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    email :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 

    },
    rg :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    datanasc :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = usuario;