 

-- Volcando estructura para procedimiento prueba.stp_C_user
DROP PROCEDURE IF EXISTS `stp_C_user`;
DELIMITER //
CREATE PROCEDURE `stp_C_user`(
	IN pname VARCHAR (200), 
   IN ppatters LONGTEXT CHARACTER SET UTF8 ,
   IN pemail VARCHAR (200) , 
   IN ppassword VARCHAR (200) 
)
BEGIN 
INSERT INTO tbl_users (name, patters , create_at , email, password) VALUES (pname , ppatters ,NOW(), pemail ,  AES_ENCRYPT( ppassword,'pass'));

SELECT LAST_INSERT_ID() AS id;
END//
DELIMITER ;

 