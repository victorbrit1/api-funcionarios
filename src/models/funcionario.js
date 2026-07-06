const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Funcionario = sequelize.define("Funcionario", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cargo:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})

module.exports = Funcionario