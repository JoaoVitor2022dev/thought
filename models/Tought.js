const { DataTypes } = require('sequelize'); 

const db = require('../db/conn');

const User = require('./User');

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    } 
})

// models tought pertence ao user 
Tought.belongsTo(User); 

// e um usuario tem muitos pensamentos
User.hasMany(Tought); 

module.exports = Tought;