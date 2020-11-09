// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Cliente = sequelize.define("cliente", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
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
        type: Sequelize.STRING(),
        validate: {
            len: [1, 12]
        }
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    },
});
 
module.exports = Cliente;