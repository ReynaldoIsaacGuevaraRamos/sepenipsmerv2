-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2021 a las 19:48:08
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbsepeni`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluaciones`
--

CREATE TABLE `evaluaciones` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `state_evaluacion` tinyint(1) DEFAULT 0,
  `state_inteligencia` tinyint(1) DEFAULT 0,
  `state_personalidad` tinyint(1) DEFAULT 0,
  `state_proyectiva` tinyint(1) DEFAULT 0,
  `state_emocional` tinyint(1) DEFAULT 0,
  `date_start` datetime DEFAULT NULL,
  `date_finish` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `evaluaciones`
--

INSERT INTO `evaluaciones` (`id`, `id_user`, `state_evaluacion`, `state_inteligencia`, `state_personalidad`, `state_proyectiva`, `state_emocional`, `date_start`, `date_finish`) VALUES
(1, 333333333, 0, 0, 0, 1, 0, NULL, NULL),
(2, 666666666, 0, 0, 1, 1, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados_emocional`
--

CREATE TABLE `resultados_emocional` (
  `id_result` varchar(100) NOT NULL,
  `id_evaluacion` int(11) NOT NULL,
  `puntaje` int(11) NOT NULL,
  `resultado` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados_inteligencia`
--

CREATE TABLE `resultados_inteligencia` (
  `id_result` int(9) NOT NULL,
  `id_evaluacion` int(11) DEFAULT NULL,
  `puntaje` int(11) NOT NULL,
  `resultado` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `resultados_inteligencia`
--

INSERT INTO `resultados_inteligencia` (`id_result`, `id_evaluacion`, `puntaje`, `resultado`, `date`) VALUES
(0, NULL, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados_personalidad`
--

CREATE TABLE `resultados_personalidad` (
  `id_result` varchar(100) NOT NULL,
  `id_evaluacion` int(11) NOT NULL,
  `puntaje` int(11) NOT NULL,
  `resultado` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados_proyectiva`
--

CREATE TABLE `resultados_proyectiva` (
  `id_result` varchar(100) NOT NULL,
  `id_evaluacion` int(11) NOT NULL,
  `puntaje` int(11) NOT NULL,
  `resultado` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `nombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'Soporte'),
(2, 'Psicologo'),
(3, 'AdministradorRRHH'),
(4, 'Empleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `dui` int(11) NOT NULL,
  `nombre` varchar(75) DEFAULT NULL,
  `apellido` varchar(75) DEFAULT NULL,
  `sexo` varchar(50) DEFAULT NULL,
  `cargo` varchar(125) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `telefono` int(25) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `id_rol` smallint(5) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `dui`, `nombre`, `apellido`, `sexo`, `cargo`, `fechaNacimiento`, `telefono`, `correo`, `password`, `id_rol`) VALUES
(2, 111111111, 'Gabriel Garcia', 'Gabriel Granados', 'M', 'Administrador', '2021-09-21', 7784571, 'gg18016@ues.edu.sv', '19481dde85f18b326806a24e9e2439556f5ba602', 3),
(7, 777777777, 'Reynaldo Isaac', 'Guevara Ramos', 'M', 'Administrador', '2021-09-29', 75484215, 'gr18016@ues.edu.sv', '35f8b2b38d729ec22db64b2ba6e987b834571a7f', 1),
(9, 666666666, 'Jose David', 'Escobar Muños', 'M', 'Scrum Master', '1989-09-16', 7845945, 'em06020@ues.edu.sv', 'dd94a6ea8e7106cdc39a74bdf0d666f09fa434f0', 4),
(12, 333333333, 'Gladiz Maribel', 'Montoya Lopez', 'F', 'Diseñadora de UI', '1996-06-11', 7845942, 'ml17020@ues.edu.sv', '0518c71efd60219523a9df221ebb020e12bd08af', 4),
(14, 222222222, 'Nelson', 'Ayala', 'M', 'Psicologo', '1971-10-27', 7845124, 'nelson@gamil.com', 'aec5e3a76b247ae06139aad6081a61022d69303f', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `evaluaciones`
--
ALTER TABLE `evaluaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_user` (`id_user`) USING BTREE;

--
-- Indices de la tabla `resultados_emocional`
--
ALTER TABLE `resultados_emocional`
  ADD PRIMARY KEY (`id_result`),
  ADD KEY `id_evaluacion` (`id_evaluacion`);

--
-- Indices de la tabla `resultados_inteligencia`
--
ALTER TABLE `resultados_inteligencia`
  ADD PRIMARY KEY (`id_result`),
  ADD KEY `id_evaluacion` (`id_evaluacion`);

--
-- Indices de la tabla `resultados_personalidad`
--
ALTER TABLE `resultados_personalidad`
  ADD PRIMARY KEY (`id_result`),
  ADD KEY `id_evaluacion` (`id_evaluacion`);

--
-- Indices de la tabla `resultados_proyectiva`
--
ALTER TABLE `resultados_proyectiva`
  ADD PRIMARY KEY (`id_result`),
  ADD KEY `id_evaluacion` (`id_evaluacion`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dui_unique` (`dui`),
  ADD UNIQUE KEY `email_unique` (`correo`),
  ADD KEY `roles_de_usuarios` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `evaluaciones`
--
ALTER TABLE `evaluaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `evaluaciones`
--
ALTER TABLE `evaluaciones`
  ADD CONSTRAINT `evaluaciones_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`dui`) ON DELETE CASCADE;

--
-- Filtros para la tabla `resultados_emocional`
--
ALTER TABLE `resultados_emocional`
  ADD CONSTRAINT `resultados_emocional_ibfk_1` FOREIGN KEY (`id_evaluacion`) REFERENCES `evaluaciones` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `resultados_inteligencia`
--
ALTER TABLE `resultados_inteligencia`
  ADD CONSTRAINT `resultados_inteligencia_ibfk_1` FOREIGN KEY (`id_evaluacion`) REFERENCES `evaluaciones` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `resultados_personalidad`
--
ALTER TABLE `resultados_personalidad`
  ADD CONSTRAINT `resultados_personalidad_ibfk_1` FOREIGN KEY (`id_evaluacion`) REFERENCES `evaluaciones` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `resultados_proyectiva`
--
ALTER TABLE `resultados_proyectiva`
  ADD CONSTRAINT `resultados_proyectiva_ibfk_1` FOREIGN KEY (`id_evaluacion`) REFERENCES `evaluaciones` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `roles_de_usuarios` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
