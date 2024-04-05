-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2024 a las 04:44:44
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

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
-- Estructura de tabla para la tabla `paco`
--

CREATE TABLE `paco` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `saldo` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paco`
--

INSERT INTO `paco` (`id`, `nombre`, `saldo`) VALUES
(1, 'David de peña gutierres san patricio', '9965.00'),
(2, 'Arturo gustabante Dominguez crespo don chuy', '335.00');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Estructura de tabla para la tabla `transacciones`
--

CREATE TABLE `transacciones` (
  `id` int(11) NOT NULL,
  `remitente_id` int(11) DEFAULT NULL,
  `destinatario_id` int(11) DEFAULT NULL,
  `cantidad` decimal(10,2) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `transacciones`
--

INSERT INTO `transacciones` (`id`, `remitente_id`, `destinatario_id`, `cantidad`, `fecha`) VALUES
(3, 1, 2, '5.00', '2024-04-05 01:15:19'),
(4, 1, 2, '10.00', '2024-04-05 01:33:16'),
(5, 1, 2, '10.00', '2024-04-05 01:35:44'),
(6, 1, 2, '10.00', '2024-04-05 01:36:07'),
(7, 1, 2, '10.00', '2024-04-05 01:45:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `UsuarioID` varchar(100) NOT NULL,
  `UsuarioClavePrivada` varchar(100) NOT NULL,
  `UsuarioClavePublica` varchar(100) NOT NULL,
  `UsuarioDatos` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`UsuarioID`, `UsuarioClavePrivada`, `UsuarioClavePublica`, `UsuarioDatos`) VALUES
('113402879819846605562', 'U2FsdGVkX19rxs7bHsC7afpQ0CvV0qbvnSEenHPOEJ590MXKrH78l/nkDOz1Uq75', 'U2FsdGVkX1/72PapNe07jyh7i6GolcR9Q5HZWHsxaFdcieXr3qNz/4Tzfwr5NOVM', 'U2FsdGVkX1//dq33bxTsmk87uH1dFmH+fovW/h7VJQZq9fhsM9PbagmBPkakLNK32G8sgLz5dh4YzXvsyA4zKa22S8guUZH4p1sVelpPYVnj9W9LOFsAJy/MLEynSou1f4UKlc2UpP29ZK1jtuuD27GD926gp3grm9xkjbIBoTbYHnkL9CRrFjqqhUSYJVokRSExgt5fylCrsbfeZszYurKxDCSqQ9bdwHEBUAramKabnqjAJPRELYfIZ5y3UMvz0DaVSIYhtusFd7oNXaPRTIAcAvt51MNE1AgTsgW8yKb6RreHrD0P2kIPHeCZzQiFuY3k4+Qai8tIST00Ogu7rA==');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paco`
--
ALTER TABLE `paco`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `remitente_id` (`remitente_id`),
  ADD KEY `destinatario_id` (`destinatario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`UsuarioID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `paco`
--
ALTER TABLE `paco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
