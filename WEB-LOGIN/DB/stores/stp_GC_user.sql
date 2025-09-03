 

-- Volcando estructura para procedimiento prueba.stp_GC_user
DROP PROCEDURE IF EXISTS `stp_GC_user`;
DELIMITER //
CREATE PROCEDURE `stp_GC_user`(
    IN pname VARCHAR(200), 
    IN ppatters LONGTEXT CHARACTER SET UTF8,
    IN pemail VARCHAR(200), 
    IN ppassword VARCHAR(200)
)
BEGIN
 
    INSERT INTO tbl_users (name, patters, create_at, email, password) 
    VALUES (
        pname, 
        ppatters, 
        NOW(), 
        pemail, 
        AES_ENCRYPT(ppassword, 'pass') -- cifrado simétrico con clave 'pass'
    );

    -- Devolver el ID insertado
    SELECT LAST_INSERT_ID() AS id;
END//
DELIMITER ;

 