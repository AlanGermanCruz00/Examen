 
-- Volcando estructura para procedimiento prueba.stp_sing_in
DROP PROCEDURE IF EXISTS `stp_sing_in`;
DELIMITER //
CREATE PROCEDURE `stp_sing_in`(
   IN pemail VARCHAR(200), 
   IN ppassword VARCHAR(200)
)
BEGIN
   SELECT id_user, name, email
   FROM tbl_users 
   WHERE email = pemail 
     AND password = AES_ENCRYPT(ppassword, 'pass');
END//
DELIMITER ;

 