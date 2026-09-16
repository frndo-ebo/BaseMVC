const db = require('../config/db');

const Cliente = {
  createNewClient: async (nome, cpf) => {
    try {
      const [[procedureResult]] = await db.execute('CALL sp_create_client(?, ?)', [nome, cpf]);
      
      const insertId = procedureResult[0].insertId; 
      
      return { id: insertId, nome, cpf };
    } catch (error) {
      throw error;
    }
  },

  getAllClients: async () => {
    try {
      const [[rows]] = await db.query('CALL sp_get_all_clients()');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  updateClient: async (id, nome, cpf) => {
    try {
      if (!id) {
        throw new Error('ID do cliente é necessário!');
      }

      const [result] = await db.execute('CALL sp_update_client(?, ?, ?)', [id, nome, cpf]);
      
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

      const [result] = await db.execute('CALL sp_delete_client(?)', [id]);
      
      if (result.affectedRows === 0) {
        throw new Error('Cliente não encontrado');
      }

      return { message: 'Cliente excluído com sucesso' };
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Cliente;