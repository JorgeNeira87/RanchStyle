-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-04-2024 a las 14:36:43
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `si_banco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transacciones`
--

CREATE TABLE `transacciones` (
  `id` int(11) NOT NULL,
  `datos` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `UsuarioID` varchar(100) NOT NULL,
  `UsuarioClavePrivada` varchar(100) NOT NULL,
  `UsuarioClavePublica` varchar(100) NOT NULL,
  `UsuarioDatos` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`UsuarioID`, `UsuarioClavePrivada`, `UsuarioClavePublica`, `UsuarioDatos`) VALUES
('108848749981709851867', 'U2FsdGVkX1/e5FkKjnqa73j+zfPkPU1FI1j62xbTGDUg9Wcxu3uPkjll/vucwpdT', 'U2FsdGVkX19CcJu1i1VVOGZEuxLKKacTcTQPdnAtVjaaPtGoKZy+EX50BPiYI47x', 'U2FsdGVkX1+tijoRnSu7lw9p1c54dYzxO7+osJeigG+9HJN6P4NW2ERa7JM4H3XSGw3oZO2UeELp6IADtlgFqQSVRbOj1I4060P0TpWqLa/6FRFz56nuuOBoogk5u3t+pt2CqeNYHKzk3F33rJmuof4B+j4NsQ8Uj/JLquy2N4OTPVQooXPu5/8w648rBghnsbMW+TMbMAFzwgR+NJjVyojwi2tqHLYzEH+BqPgE1mBea0uqis9aH4gqIQ/T4kQIv62UT20tbJHZa4wWGay6GgqKswTswDNfaRLu7qrAuI1oNJ5CC5gca+b2l/T0v0/g8qzZFLA36D4uehEarCYgr9WvyGIKU2IRtX8yTXDkKh+tiw7hF3F5G5PIhPgVM2DPlrKJUQvM90+CP5apX+0WLD2Jq96FJrq32XF07kUUyNz5/1an8REGQP7Jkm4T0dzijTJQpIudQSvEq7DPbQJB/9tykMq6UyfpTB/6c6dowSyoz03SIYxjKPIlwrdpVRCeuRQcfOWKCsa7igcu/UonmY7I2YvLrlJW/HFzVQ2KO5gpzWB68hG6t28dPbqZkiIDsJnT7OK/FXrY+1pqqJqIFg==');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`UsuarioID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
