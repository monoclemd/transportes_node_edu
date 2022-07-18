-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 18-07-2022 a las 12:13:24
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transportestm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'xxxxxxxxxx', 'xxxxxxxxx', 'xxxxxxxx'),
(2, 'MOD MOD MOD  CHAO', 'EL DIJO CHAO ', 'QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO QUE FUE CHAO  '),
(3, 'MOD MOD MOD  BIENVENIDO', 'HERLSOYUE', 'HERLSOYUEHERLS OYUEHERL SOYUEHER LSOYUEH ERLSOY UEHERLSOYU HERLSOYUEHERLS OYUEHERL SOYUEHER LSOYUEH ERLSOY UEHERLSOYUHERLSOYUEHERLS OYUEHERL SOYUEHER LSOYUEH ERLSOY UEHERLSOYUHERLSOYUEHERLS OYUEHERL SOYUEHER LSOYUEH ERLSOY UEHERLSOYUHERLSOYUEHERLS OYUEHERL SOYUEHER LSOYUEH ERLSOY UEHERLSOYU');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'edu', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'laura', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
