 

-- Volcando estructura para procedimiento prueba.stp_A_animal
DROP PROCEDURE IF EXISTS `stp_A_animal`;
DELIMITER //
CREATE PROCEDURE `stp_A_animal`(
   IN pname VARCHAR(100), 
   IN prace VARCHAR(100), 
   IN psize VARCHAR(100),  
   IN pcolor VARCHAR(100), 
   IN pyearNacido YEAR,
   IN pyear INT
)
BEGIN
   INSERT INTO tbl_animals (name, race, size, color, yearNacido, year, create_at)
   VALUES (pname, prace, psize, pcolor, pyearNacido, pyear, NOW());

   -- devuelve el último id insertado
   SELECT LAST_INSERT_ID() AS id;
END//
DELIMITER ;
 