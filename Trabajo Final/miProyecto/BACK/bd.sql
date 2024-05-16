CREATE DATABASE `concesionario_db2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
CREATE TABLE `modelos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `borrado` tinyint(1) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `desc` varchar(500) DEFAULT NULL,
  `motor` varchar(45) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `img_ver_id` varchar(250) DEFAULT NULL,
  `version` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE DEFINER=`root`@`localhost` TRIGGER `concesionario_db2`.`modelos_BEFORE_INSERT` BEFORE INSERT ON `modelos` FOR EACH ROW
BEGIN
	SET new.borrado = 0;
END

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  `borrado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE DEFINER=`root`@`localhost` TRIGGER `concesionario_db2`.`usuarios_BEFORE_INSERT` BEFORE INSERT ON `usuarios` FOR EACH ROW
BEGIN
	set new.borrado = 0;
    set new.password = md5(new.password);
END





INSERT INTO `concesionario_db2`.`modelos`
( `nombre`, `desc`, `motor`, `precio`, `img_id`, `img_ver_id`, `version`)
VALUES
( "Giulia Quadrifoglio", 
"El Alfa Romeo Giulia Quadrifoglio representa una combinación perfecta
 de potencia y tecnología. Su motor es un 2.9 V6 que genera 510 HP
 y produce 600 Nm de par entre 2500 y 5000 rev/min. Es un motor
 sumamente potente, ligero y enteramente fabricado en aluminio.
 Cuenta con una transmisión automática de 8 velocidades, que permite
 cambiar de marcha en solo 150 milisegundos en el modo Race.", 
 "510 HP 2.9 V6 Bi-Turbo", 159000, "crjn1dvonqmx9c6aq0u2", "e1n4becifouy6dkhn3tq", "QV");
 
 INSERT INTO `concesionario_db2`.`modelos`
( `nombre`, `desc`, `motor`, `precio`, `img_id`, `img_ver_id`, `version`)
VALUES
( "Stelvio Veloce", 
"Una gama de potentes y eficientes motores fabricados íntegramente en aluminio, combinados con el cambio automático ZF de 8 velocidades para conseguir la máxima eficiencia en términos de fluidez, prestaciones y confort. Amplia gama de motorizaciones diésel y gasolina, desde 160 hasta 280 HP.", 
 "2.0T 280HP ", 99500, "xmc1wsmnxf3ibuxw3fbq", "", "Veloce");
 
 INSERT INTO `concesionario_db2`.`modelos`
( `nombre`, `desc`, `motor`, `precio`, `img_id`, `img_ver_id`, `version`)
VALUES
( "Stelvio Quadrifoglio", 
"Alfa Romeo Stelvio Quadrifoglio encarna una combinación perfecta de
 potencia y tecnología. El motor monobloque de aluminio 2.9 V6
 Bi-Turbo de 510 HP trabaja en conjunto con el sistema de tracción
 en las cuatro ruedas Q4. El motor genera 176 HP/l, con un tiempo
 de 0-100 km/h en tan solo 3,8 segundos.
 Mientras está en modo “Race”, la transmisión automática de 8
 velocidades le permite cambiar de marcha en 150 milisegundos.", 
 "510 HP 2.9 V6 Bi-Turbo", 159000, "uft18hnqcal7hlhyjtqs", "oomtfafwkv10ssh6tduu", "QV");
 
 
 
 
 INSERT INTO `concesionario_db2`.`usuarios`
(`usuario`,
`password`,
`nombre`,
`cargo`)
VALUES
(
"Nico",
"1234",
"Nicolas",
"Admin"
);

INSERT INTO `concesionario_db2`.`usuarios`
(`usuario`,
`password`,
`nombre`,
`cargo`)
VALUES
(
"Lau_83",
"1234",
"Laura",
"Gerenta"
);