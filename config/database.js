const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'crud-empregados',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize,
    sequelize
};
