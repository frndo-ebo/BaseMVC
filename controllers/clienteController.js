const ClienteModel = require('../models/ClienteModel');

const clienteController = {

    createNewClient: async (req, res) => {
        const { nome, cpf } = req.body;
        try {
            if (!nome || !cpf) {
                return res.status(400).json({ error: 'Nome e CPF são obrigatórios.' });
            }
            const newClient = await ClienteModel.createNewClient(nome, cpf);
            res.status(201).json(newClient)

        } catch (error) {
            console.error('Erro ao criar novo cliente: ', error);
            res.status(500).json({ error: 'Erro ao criar novo cliente:.' })
        }
    },
    getAllClients: async (req, res) => {
        try {
            const clients = await ClienteModel.getAllClients();
            res.status(200).json(clients);
        } catch (error) {
            console.error('Erro ao obter dados:', error);
            res.status(500).json({ error: 'Erro ao obter dados:' });
        }
    },
    updateClient: async (req, res) => {
        const { id } = req.params;
        const { nome, cpf } = req.body;
        try {
            if (!id || !nome || !cpf) {
                return res.status(400).json({ error: 'ID, nome e CPF são obrigatórios' });
            }
            const updateClient = await ClienteModel.updateClient(id, nome, cpf);
            res.status(200).json(updateClient);
        } catch (error) {
            console.error('Erro ao atualizar cliente: ', error);
            res.status(500).json({ error: 'Erro ao atualizar cliente: ' });
        }
    },
    deleteClient: async (req, res) => {
        const { id } = req.params;
        try {
            if (!id) {
                return res.status(400).json({ error: 'ID do cliente é obrigatório!' });
            }
            await ClienteModel.deleteClient(id);
            res.status(200).json({ message: 'Cliente excluido com sucesso.' })
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
            res.status(500).json({ error: 'Erro ao excluir cliente:' });
        }
    }
}
module.exports = clienteController;