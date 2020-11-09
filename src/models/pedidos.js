// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');

// Cria tabela no BD e seus campos
const Pedidos = sequelize.define("pedido", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    cliente: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    endereço: {
        allowNull: false,
        type: Sequelize.STRING(),
        validate: {
            len: [1, 999999]
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(),
        validate: {
            len: [1, 999999]
        }
    },
    telefone: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    produto: {
        allowNull: false,
        type: Sequelize.STRING(),
        validate: {
            len: [1, 999999]
        }
    },
    valor: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
});

module.exports = Pedidos;