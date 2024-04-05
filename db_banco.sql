-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2024 a las 04:10:04
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
(1, 'Emori', 100.50, '2023-02-01', 'Retiro'),
(2, 'Emori', 50.00, '2023-02-02', 'Retiro'),
(3, 'Emori', 50.00, '2023-02-02', 'Retiro'),
(4, 'Emori', 100.50, '2023-02-02', 'Retiro'),
(5, 'Emori', 50.00, '2023-02-02', 'Retiro'),
(6, 'Emori', 50.00, '2023-02-02', 'Retiro'),
(7, 'Emori', 50.00, '2023-02-02', 'Retiro'),
(8, 'Emori', 50.00, '2023-02-03', 'Retiro'),
(10, 'Emori', 100.00, '2023-02-04', 'Deposito');

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
('108848749981709851867', 'U2FsdGVkX1+oT/XSHXo/uNnfFAyZLUtQkXK9aJJKTWfomcVLSJuIKIdxWEYdPr2Q', 'U2FsdGVkX18eiCEVVhg8304W+odQ/4o4e3XKLUtLymQL3EaCL65KlYzigS0rFNrP', 'U2FsdGVkX18RQfhlvmySD5DR4HHiOZr8QIHO5uMJwwoVJcRQSmCxfx34UgxlpVAsmWIDTAe4hSVuce+XShFX5FsafpI7Fd1vinyT+HzlACPBtIftNBU2e0mplr0MNyhQTXRZevdJFxT8CoopOKynbRxk1oN6Ovhs1lrUsmVXB5al6qWZ/+cl7XzmDfHH47l4djJ7Xw1NhGSSi4uwt+gR0eEjb9ux0OmhNEz24ot7R5soRP2yOUd33y9sPKf1sU5VSzSp1tY8m9Nn2wVfNdA+YFqQT4gIKC6dkd9ErdYw0BIbTHcalwDJH1lOB9h6qEqhdLCnVPQJy1q68eYtjVP2xH3vO5WMU02cybIE17PfYgakiMZEJ3XwAOffC50SE+KJi0X6qseyjVsNG5imUx3SmW5HVns2k2VEKTi8sfQtrtoNDFD8zgVMs5If7OZNTTMRNE6vIGX7HSeUWxk5N/CLZkskRTEWxFiQrD5WC5Oz24d7a5Ohv96ZcWiSYSf5G94p');

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
