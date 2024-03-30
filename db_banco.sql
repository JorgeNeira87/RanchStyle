-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-02-2023 a las 22:48:28
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_banco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `cantidad` decimal(10,2) NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp(),
  `tipo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `usuario`, `cantidad`, `fecha`, `tipo`) VALUES
(1, 'Emori', '100.50', '2023-02-01', 'Retiro'),
(2, 'Emori', '50.00', '2023-02-02', 'Retiro'),
(3, 'Emori', '50.00', '2023-02-02', 'Retiro'),
(4, 'Emori', '100.50', '2023-02-02', 'Retiro'),
(5, 'Emori', '50.00', '2023-02-02', 'Retiro'),
(6, 'Emori', '50.00', '2023-02-02', 'Retiro'),
(7, 'Emori', '50.00', '2023-02-02', 'Retiro'),
(8, 'Emori', '50.00', '2023-02-03', 'Retiro'),
(10, 'Emori', '100.00', '2023-02-04', 'Deposito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `numero` varchar(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `saldo` decimal(10,2) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp(),
  `rango` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`numero`, `nombre`, `tipo`, `contrasena`, `saldo`, `estado`, `fecha`, `rango`) VALUES
('415417', 'Emori', 'Debito', '123456', '100.00', 'Activo', '2023-02-01', 'Usuario'),
('415418', 'Jorge', 'Ahorro', '741852', '200.30', 'Activo', '2023-02-01', 'Usuario'),
('415419', 'Valente', 'Debito', '45648', '0.00', 'Activo', '2023-02-02', 'Usuario'),
('415420', 'Chon', 'Ahorro', '74626', '0.00', 'Activo', '2023-02-02', 'Usuario'),
('415421', 'Emily', 'Debito', '741', '0.00', 'Activo', '2023-02-02', 'Usuario'),
('415456', 'Angel', 'Debito', '78551', '0.00', 'Activo', '2023-02-02', 'Usuario'),
('415789', 'Luis', 'Tarjeta de crédito', '213465', '0.00', 'Activo', '2023-02-02', 'Usuario'),
('@admin', 'Administrador', 'Tarjeta de crédito', '54321', '99999999.99', 'Activo', '2023-02-01', 'Administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`numero`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
