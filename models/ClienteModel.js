const db = require('../config/db');

const Cliente = {

    createNewClient: async (nome, cpf) => {
        try {
            const [result] = await db.execute('INSERT INTO Cliente (nome, cpf) VALUES(?, ?)', [nome, cpf]);
            return { id: result.insertId, nome, cpf };
        } catch (error) {
            throw error;
        }
    },

    getAllClients: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM Cliente');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    // Corrigido de 'upadteClient' para 'updateClient'
    updateClient: async (id, nome, cpf) => {
        try {
            if (!id) {
                throw new Error('ID do cliente é necessário!');
            }
            const [result] = await db.execute('UPDATE Cliente SET nome = ?, cpf = ? WHERE id = ?', [nome, cpf, id]);

            if (result.affectedRows === 0) {
                throw new Error('Cliente não cadastrado!');
            }
        } catch (error) {
            throw error;
        }
    },

    deleteClient: async (id) => {
        try {
            if (!id) {
                throw new Error('ID do cliente é necessário!');
            }

            const [result] = await db.execute('DELETE FROM Cliente WHERE id = ?', [id]);

            if (result.affectedRows === 0) {
                throw new Error('Cliente não encontrado');
            }
            return { message: 'Cliente excluído com sucesso' };

        } catch (error) {
            throw error;
        }
    }
}; // Fechamento correto do objeto Cliente

module.exports = Cliente;
