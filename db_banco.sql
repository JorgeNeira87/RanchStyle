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
IF EXISTS (
    SELECT 1 
    FROM information_schema.tables 
    WHERE table_schema = 'db_banco' 
    AND table_name = 'usuarios'
) THEN
    DROP TABLE db_banco.usuarios;
END IF;


CREATE TABLE `usuarios` (
  `UsuarioID` varchar(100) NOT NULL,
  `UsuarioClavePrivada` varchar(100) NOT NULL,
  `UsuarioClavePublica` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`UsuarioID`, `UsuarioClavePrivada`, `UsuarioClavePublica`) VALUES
('108848749981709851867', 'U2FsdGVkX19PxAvsmhZ+c6qLPhDVbOp6+HIVi3m73UuXqeKq8EDdRGTIBcK0VjVE', 'U2FsdGVkX19dRk5etyMMXY3f5o4TysU+LfWjNpAQ342m6g9RXpvEy+EGjSEfbhrf');

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
  ADD PRIMARY KEY (`UsuarioID`);

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
