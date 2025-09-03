 
-- Volcando estructura para procedimiento prueba.stp_U_animal
DROP PROCEDURE IF EXISTS `stp_U_animal`;
DELIMITER //
CREATE PROCEDURE `stp_U_animal`(
   IN pid INT,
   IN pname VARCHAR(100), 
   IN prace VARCHAR(100), 
   IN psize VARCHAR(100),  
   IN pcolor VARCHAR(100), 
   IN pyearNacido YEAR,
   IN pyear INT
)
BEGIN
   UPDATE tbl_animals SET 
      name = pname, 
      race = prace, 
      size = psize, 
      color = pcolor, 
      yearNacido = pyearNacido, 
      year = pyear,
      create_at = NOW()
   WHERE id_animal = pid;

   -- devolver confirmación
   SELECT ROW_COUNT() AS id;
END//
DELIMITER ;
 