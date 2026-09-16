CREATE DATABASE IF NOT EXISTS mvc;
USE mvc;

CREATE TABLE IF NOT EXISTS cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(100) NOT NULL
);

-- -----------------------------------------------------
-- Procedure: Inserir Cliente
-- -----------------------------------------------------
DELIMITER $$
CREATE PROCEDURE sp_create_client(
    IN p_nome VARCHAR(100),
    IN p_cpf VARCHAR(100)
)
BEGIN
    INSERT INTO cliente (nome, cpf) VALUES (p_nome, p_cpf);
    -- Retorna o ID que acabou de ser gerado
    SELECT LAST_INSERT_ID() AS insertId;
END $$
DELIMITER ;

-- -----------------------------------------------------
-- Procedure: Listar Todos os Clientes
-- -----------------------------------------------------
DELIMITER $$
CREATE PROCEDURE sp_get_all_clients()
BEGIN
    SELECT * FROM cliente;
END $$
DELIMITER ;

-- -----------------------------------------------------
-- Procedure: Atualizar Cliente
-- -----------------------------------------------------
DELIMITER $$
CREATE PROCEDURE sp_update_client(
    IN p_id INT,
    IN p_nome VARCHAR(100),
    IN p_cpf VARCHAR(100)
)
BEGIN
    UPDATE cliente SET nome = p_nome, cpf = p_cpf WHERE id = p_id;
END $$
DELIMITER ;

-- -----------------------------------------------------
-- Procedure: Deletar Cliente
-- -----------------------------------------------------
DELIMITER $$
CREATE PROCEDURE sp_delete_client(
    IN p_id INT
)
BEGIN
    DELETE FROM cliente WHERE id = p_id;
END $$
DELIMITER ;
