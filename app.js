const express = require('express');  
const clienteController = require('./controllers/clienteController');  
const path = require('path');  
  
const app = express();  
const PORT = 3000;  
  
app.use(express.json());  
app.use(express.static(path.join(__dirname, 'public')));  
  
app.post('/api/clientes', clienteController.createNewClient);  
app.get('/api/clientes', clienteController.getAllClients);  
app.put('/api/clientes/:id', clienteController.updateClient);  
app.delete('/api/clientes/:id', clienteController.deleteClient);  
  
app.listen(PORT, () => {  
  console.log(`Servidor rodando em http://localhost:${PORT}`);  
});