const { Sequelize } = require('sequelize'); 

const sequelize = new Sequelize('toughts2', 'root', 'vitordev123', {
    host: 'localhost',
    dialect: 'mysql',
})


try { 
    sequelize.authenticate()
    console.log('Conectamos com sucesso !'); 
} catch (error) {
   console.log(`nao é possivel conectar: ${error}`)
}

module.exports = sequelize;

