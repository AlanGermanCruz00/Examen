 

-- Volcando estructura para tabla prueba.tbl_animals
DROP TABLE IF EXISTS `tbl_animals`;
CREATE TABLE IF NOT EXISTS `tbl_animals` (
  `id_animal` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `race` varchar(100) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `yearNacido` year(4) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_animal`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- La exportación de datos fue deseleccionada.
 