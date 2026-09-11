const mysql = require('mysql2');

// Configurar a conexão com o banco de dados
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'mvc',
    port: 3302
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro de conexão: ' + err.stack);
        return;
    }
    
});


module.exports = connection.promise();