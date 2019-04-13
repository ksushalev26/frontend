-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 13, 2019 at 10:46 PM
-- Server version: 10.3.13-MariaDB
-- PHP Version: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myinterpipe`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) UNSIGNED NOT NULL,
  `country` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country`) VALUES
(1, 'Белорусь'),
(2, 'Болгария'),
(3, 'Германия'),
(4, 'Италия'),
(5, 'Испания'),
(6, 'Катар '),
(7, 'ОАЭ'),
(8, 'Польша'),
(9, 'Португалия'),
(10, 'Румыния'),
(11, 'Сербия'),
(12, 'Словакия'),
(13, 'США'),
(14, 'Турция'),
(15, 'Украина'),
(16, 'Франция'),
(17, 'Хорватия'),
(18, 'Чехия');

-- --------------------------------------------------------

--
-- Table structure for table `diameters`
--

CREATE TABLE `diameters` (
  `id` int(11) UNSIGNED NOT NULL,
  `diametr` double(5,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `diameters`
--

INSERT INTO `diameters` (`id`, `diametr`) VALUES
(1, 33.8),
(2, 38.0),
(3, 42.2),
(4, 42.4),
(5, 48.3),
(6, 51.0),
(7, 60.3),
(8, 73.0),
(9, 76.0),
(10, 76.1),
(11, 88.9),
(12, 95.0),
(13, 101.6),
(14, 108.0),
(15, 114.3),
(16, 127.0),
(17, 133.0),
(18, 139.7),
(19, 146.0),
(20, 159.0);

-- --------------------------------------------------------

--
-- Table structure for table `factories`
--

CREATE TABLE `factories` (
  `id` int(11) UNSIGNED NOT NULL,
  `factory` varchar(255) NOT NULL,
  `workshope` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `factories`
--

INSERT INTO `factories` (`id`, `factory`, `workshope`) VALUES
(1, 'НИКОТЬЮБ', 'ТПЦ7'),
(2, 'НТЗ трубы', 'ТПЦ5'),
(3, 'НТЗ трубы', 'ТПЦ3');

-- --------------------------------------------------------

--
-- Table structure for table `finishes`
--

CREATE TABLE `finishes` (
  `id` int(11) UNSIGNED NOT NULL,
  `finish` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `finishes`
--

INSERT INTO `finishes` (`id`, `finish`) VALUES
(1, 'Обрезка под прямым углом'),
(2, 'Фаска'),
(3, 'Фаска 30-35\''),
(4, 'Фаска 35-40\'\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `type`) VALUES
(1, 'Трубы общего назначения'),
(2, 'Трубы для нефтегазопроводов');

-- --------------------------------------------------------

--
-- Table structure for table `regions`
--

CREATE TABLE `regions` (
  `id` int(11) UNSIGNED NOT NULL,
  `region` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `regions`
--

INSERT INTO `regions` (`id`, `region`) VALUES
(1, 'Европа'),
(2, 'США'),
(3, 'Украина'),
(4, 'Белорусь'),
(5, 'Ближний Восток');

-- --------------------------------------------------------

--
-- Table structure for table `segments`
--

CREATE TABLE `segments` (
  `id` int(11) UNSIGNED NOT NULL,
  `segment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `segments`
--

INSERT INTO `segments` (`id`, `segment`) VALUES
(1, 'Валлурек'),
(2, 'Америка'),
(3, 'БВиА'),
(4, 'ТС'),
(5, 'Украина');

-- --------------------------------------------------------

--
-- Table structure for table `shipment`
--

CREATE TABLE `shipment` (
  `id` int(11) UNSIGNED NOT NULL,
  `region_id` int(11) UNSIGNED NOT NULL,
  `segment_id` int(11) UNSIGNED NOT NULL,
  `country_id` int(11) UNSIGNED NOT NULL,
  `factory_id` int(11) UNSIGNED NOT NULL,
  `type_id` int(11) UNSIGNED NOT NULL,
  `steel_id` int(11) UNSIGNED NOT NULL,
  `standart_id` int(11) UNSIGNED NOT NULL,
  `diameter_id` int(11) UNSIGNED NOT NULL,
  `side_id` int(11) UNSIGNED NOT NULL,
  `finish_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shipment`
--

INSERT INTO `shipment` (`id`, `region_id`, `segment_id`, `country_id`, `factory_id`, `type_id`, `steel_id`, `standart_id`, `diameter_id`, `side_id`, `finish_id`) VALUES
(1, 1, 1, 8, 1, 1, 17, 8, 7, 3, 1),
(2, 1, 1, 8, 1, 1, 17, 8, 7, 3, 1),
(3, 1, 1, 8, 1, 1, 17, 8, 7, 7, 1),
(4, 1, 1, 8, 1, 1, 17, 8, 7, 7, 1),
(5, 1, 1, 8, 1, 1, 17, 8, 7, 8, 1),
(6, 1, 1, 8, 1, 1, 17, 8, 10, 3, 1),
(7, 1, 1, 8, 1, 1, 17, 8, 10, 7, 1),
(8, 1, 1, 8, 1, 1, 17, 8, 10, 9, 1),
(9, 1, 1, 8, 1, 1, 17, 8, 10, 16, 1),
(10, 1, 1, 8, 1, 1, 17, 8, 16, 16, 1),
(11, 1, 1, 8, 1, 1, 17, 8, 17, 13, 1),
(12, 1, 1, 4, 1, 1, 12, 14, 8, 22, 1),
(13, 1, 1, 8, 1, 1, 17, 8, 17, 9, 1),
(14, 1, 1, 8, 1, 1, 17, 8, 18, 7, 1),
(15, 1, 1, 8, 1, 1, 17, 8, 18, 16, 1),
(16, 1, 1, 8, 1, 1, 17, 8, 18, 22, 1),
(17, 1, 1, 4, 1, 1, 12, 14, 15, 29, 1),
(18, 5, 3, 7, 1, 2, 8, 2, 3, 4, 1),
(19, 5, 3, 7, 1, 2, 8, 2, 5, 10, 1),
(20, 1, 1, 8, 1, 1, 17, 8, 1, 5, 1),
(21, 1, 1, 8, 1, 1, 17, 8, 11, 5, 1),
(22, 1, 4, 2, 3, 1, 24, 6, 15, 32, 1),
(23, 1, 4, 2, 3, 1, 23, 6, 15, 31, 1),
(24, 5, 3, 7, 1, 2, 8, 2, 8, 19, 2),
(25, 5, 3, 7, 1, 2, 8, 2, 15, 15, 2),
(26, 1, 1, 8, 1, 1, 17, 8, 17, 13, 1),
(27, 3, 5, 15, 2, 1, 3, 17, 9, 31, 1),
(28, 1, 1, 4, 1, 1, 22, 16, 4, 2, 1),
(29, 1, 1, 4, 1, 1, 22, 16, 5, 2, 1),
(30, 2, 2, 13, 1, 2, 6, 2, 7, 6, 3),
(31, 2, 2, 13, 1, 2, 6, 2, 7, 12, 3),
(32, 2, 2, 13, 1, 2, 6, 2, 7, 12, 3),
(33, 2, 2, 13, 1, 2, 6, 2, 11, 11, 3),
(34, 2, 2, 13, 1, 2, 6, 2, 15, 15, 3),
(35, 3, 5, 15, 2, 1, 2, 17, 20, 22, 1),
(36, 3, 5, 15, 2, 1, 1, 17, 19, 14, 1),
(37, 3, 5, 15, 3, 1, 2, 17, 17, 33, 1),
(38, 3, 5, 15, 2, 1, 2, 17, 16, 18, 1),
(39, 3, 5, 15, 2, 1, 1, 17, 12, 14, 1),
(40, 1, 1, 17, 1, 1, 10, 10, 7, 2, 3),
(41, 1, 1, 17, 1, 1, 10, 10, 7, 3, 3),
(42, 1, 1, 17, 1, 1, 10, 10, 7, 5, 3),
(43, 1, 1, 17, 1, 1, 10, 10, 14, 5, 3),
(44, 1, 1, 8, 1, 1, 13, 12, 7, 5, 1),
(45, 1, 1, 8, 1, 1, 13, 12, 7, 16, 1),
(46, 1, 1, 8, 1, 1, 13, 12, 11, 16, 1),
(47, 1, 1, 8, 1, 1, 13, 12, 16, 20, 1),
(48, 1, 1, 8, 1, 1, 13, 12, 17, 9, 1),
(49, 1, 1, 8, 1, 1, 13, 12, 18, 16, 1),
(50, 1, 1, 8, 1, 1, 13, 12, 18, 20, 1),
(51, 1, 1, 12, 1, 1, 20, 18, 11, 3, 1),
(52, 1, 1, 12, 1, 1, 20, 18, 15, 5, 1),
(53, 1, 1, 12, 1, 1, 20, 18, 17, 7, 1),
(54, 1, 1, 10, 1, 1, 16, 9, 10, 9, 1),
(55, 1, 1, 10, 1, 1, 7, 5, 18, 24, 1),
(56, 1, 1, 10, 1, 1, 16, 9, 18, 13, 1),
(57, 1, 1, 10, 1, 1, 16, 9, 18, 20, 1),
(58, 1, 1, 10, 1, 1, 16, 9, 18, 27, 1),
(59, 1, 1, 18, 1, 1, 12, 14, 18, 22, 1),
(60, 1, 1, 3, 1, 1, 11, 13, 13, 22, 1),
(61, 1, 1, 10, 1, 1, 16, 9, 1, 1, 1),
(62, 1, 1, 10, 1, 1, 16, 9, 1, 3, 1),
(63, 1, 1, 10, 1, 1, 16, 9, 11, 5, 1),
(64, 1, 1, 3, 1, 1, 11, 13, 13, 22, 1),
(65, 1, 1, 11, 1, 1, 19, 15, 10, 2, 1),
(66, 1, 1, 11, 1, 1, 15, 18, 10, 2, 1),
(67, 1, 1, 11, 1, 1, 19, 15, 10, 5, 1),
(68, 1, 1, 11, 1, 1, 15, 18, 10, 7, 1),
(69, 5, 3, 14, 1, 1, 18, 15, 10, 3, 1),
(70, 5, 3, 14, 1, 1, 18, 15, 10, 3, 1),
(71, 1, 1, 10, 1, 1, 16, 9, 15, 8, 1),
(72, 1, 1, 10, 1, 1, 16, 9, 18, 20, 1),
(73, 1, 1, 9, 1, 1, 15, 18, 18, 9, 1),
(74, 1, 1, 9, 1, 1, 9, 1, 15, 23, 2),
(75, 1, 1, 8, 1, 1, 14, 11, 18, 7, 1),
(76, 1, 1, 10, 1, 1, 5, 4, 7, 17, 4),
(77, 1, 1, 10, 1, 1, 5, 4, 11, 21, 4),
(78, 1, 1, 10, 1, 1, 5, 4, 15, 15, 4),
(79, 3, 5, 15, 2, 1, 2, 17, 17, 26, 1),
(80, 5, 3, 6, 1, 2, 5, 2, 11, 11, 2),
(81, 1, 1, 10, 1, 1, 5, 4, 15, 23, 4),
(82, 4, 4, 1, 2, 1, 4, 17, 8, 25, 1),
(83, 4, 4, 1, 2, 1, 4, 17, 8, 28, 1),
(84, 1, 1, 8, 1, 1, 14, 14, 15, 16, 3),
(85, 1, 1, 8, 1, 1, 17, 8, 11, 29, 1),
(86, 1, 1, 8, 1, 1, 14, 14, 13, 30, 1),
(87, 1, 1, 8, 1, 1, 17, 8, 15, 8, 1),
(88, 1, 1, 8, 1, 1, 14, 14, 15, 13, 1),
(89, 1, 1, 8, 1, 1, 17, 8, 17, 7, 1),
(90, 1, 1, 16, 1, 1, 18, 15, 2, 1, 1),
(91, 1, 1, 2, 1, 1, 21, 7, 10, 9, 1),
(92, 1, 1, 2, 1, 1, 21, 7, 11, 14, 1),
(93, 1, 1, 2, 1, 1, 15, 18, 15, 7, 4),
(94, 1, 1, 5, 1, 1, 9, 3, 8, 19, 2),
(95, 1, 1, 5, 1, 1, 9, 3, 15, 15, 2),
(96, 1, 1, 3, 1, 1, 13, 12, 6, 7, 1),
(97, 1, 1, 3, 1, 1, 13, 12, 10, 13, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sides`
--

CREATE TABLE `sides` (
  `id` int(11) UNSIGNED NOT NULL,
  `side` double(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sides`
--

INSERT INTO `sides` (`id`, `side`) VALUES
(1, 3.00),
(2, 3.00),
(3, 2.60),
(4, 2.90),
(5, 3.20),
(6, 3.56),
(7, 3.60),
(8, 3.91),
(9, 4.00),
(10, 4.50),
(11, 5.00),
(12, 5.08),
(13, 5.49),
(14, 5.54),
(15, 5.60),
(16, 6.00),
(17, 6.02),
(18, 6.30),
(19, 6.35),
(20, 7.00),
(21, 7.01),
(22, 7.10),
(23, 7.62),
(24, 8.00),
(25, 8.56),
(26, 8.80),
(27, 9.00),
(28, 10.00),
(29, 11.00),
(30, 12.00),
(31, 12.50),
(32, 14.20),
(33, 16.00),
(34, 17.50),
(35, 30.00);

-- --------------------------------------------------------

--
-- Table structure for table `standarts`
--

CREATE TABLE `standarts` (
  `id` int(11) UNSIGNED NOT NULL,
  `standart` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `standarts`
--

INSERT INTO `standarts` (`id`, `standart`) VALUES
(1, 'API Spec 5L - 2012/ ASTM A106/A106M-2018/ ASME SA106/SA106M-2017/ ASTM A53/A53M-2018/ ASME SA53/SA53M-2017/ EN 10216-2:2014\r\n'),
(2, 'API Spec 5L - 2012/ ASTM A106/A106M-2018/ ASME SA106/SA106M-2017/ ASTM A53/A53M-2018/ ASME SA53/SA53M-2017/ NACE MR0175/ ISO 15156-2:2015/ NACE MR0103/ISO 17495-1:2016'),
(3, 'API Spec 5L - 2012/ ASTM A106/A106M-2018/ ASME SA106/SA106M-2017/ EN 10216-2:2014'),
(4, 'ASTM A106/A106M-2018/ ASME SA106/SA106M-2017'),
(5, 'ASTM A106/A106M-2018/ EN 10216-1:2014/ EN 10216-2:2014'),
(6, 'EN 10210-1:2006/ EN 10210-2:2006'),
(7, 'EN 10210-1:2006/ EN 10210-2:2006/ EN 10216-1:2014/ EN 10216-2/ DIN 1629:1984'),
(8, 'EN 10210-1:2006/ EN 10210-2:2006/ EN 10216-1:2014/ EN 10216-2:2014'),
(9, 'EN 10210-1:2006/ EN 10210-2:2006/ EN 10216-1:2014/ EN 10216-2:2014/ EN 10297-1:2003'),
(10, 'EN 10210-1:2006/ EN 10210-2:2006/ EN 10216-1:2014/ EN 10297-1:2003'),
(11, 'EN 10210-1:2006/ EN 10210-2:2006/ EN 10297-1:2003/ EN 10216-3:2014'),
(12, 'EN 10210-1:2006/ EN 10210-2:2006/ EN 10297-1:2003/ EN 10216-3:2014/ DIN 1629:1984'),
(13, 'EN 10210-1:2006/ EN 10297-1:2003'),
(14, 'EN 10210-1:2006/ EN 10297-1:2003/ EN 10216-3:2014'),
(15, 'EN 10216-1:2014'),
(16, 'EN 10255:2004'),
(17, 'ГОСТ 8731-74/ ГОСТ 8732-78 гр.В'),
(18, 'EN 10216-2:2014');

-- --------------------------------------------------------

--
-- Table structure for table `steels`
--

CREATE TABLE `steels` (
  `id` int(11) UNSIGNED NOT NULL,
  `steel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `steels`
--

INSERT INTO `steels` (`id`, `steel`) VALUES
(1, '09Г2С'),
(2, '20'),
(3, '30ХГСА'),
(4, '40Х'),
(5, 'B'),
(6, 'B/ C/ X42'),
(7, 'B/ P265GH TC1/ P265TR2'),
(8, 'B/ X42'),
(9, 'B/ X42/ P265GH TC1'),
(10, 'E235+N/ P235TR2/ S235JRH'),
(11, 'E355+AR/ S355J2H'),
(12, 'E355+N/ P355N TC1/ S355J2H'),
(13, 'E355+N/ P355N TC1/ S355J2H/ St 52.0'),
(14, 'E355+N/ P355NH TC1/ S355J2H'),
(15, 'P235GH TC1'),
(16, 'P235GH TC1/ P235 TR2/ S235JRH/ E235+N'),
(17, 'P235GH TC1/ P235TR2/ S235JRH'),
(18, 'P235TR1'),
(19, 'P235TR2'),
(20, 'P265GH TC1'),
(21, 'P265GH TC1/ P265TR1/ S275J2H/ St 44.0'),
(22, 'S195T'),
(23, 'S355J2H'),
(24, 'S460NH');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `diameters`
--
ALTER TABLE `diameters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `factories`
--
ALTER TABLE `factories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finishes`
--
ALTER TABLE `finishes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `segments`
--
ALTER TABLE `segments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shipment`
--
ALTER TABLE `shipment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`),
  ADD KEY `diameter_id` (`diameter_id`),
  ADD KEY `factory_id` (`factory_id`),
  ADD KEY `finish_id` (`finish_id`),
  ADD KEY `region_id` (`region_id`),
  ADD KEY `segment_id` (`segment_id`),
  ADD KEY `side_id` (`side_id`),
  ADD KEY `standart_id` (`standart_id`),
  ADD KEY `steel_id` (`steel_id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `sides`
--
ALTER TABLE `sides`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `standarts`
--
ALTER TABLE `standarts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `steels`
--
ALTER TABLE `steels`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `diameters`
--
ALTER TABLE `diameters`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `factories`
--
ALTER TABLE `factories`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `finishes`
--
ALTER TABLE `finishes`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `regions`
--
ALTER TABLE `regions`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `segments`
--
ALTER TABLE `segments`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `shipment`
--
ALTER TABLE `shipment`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `sides`
--
ALTER TABLE `sides`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `standarts`
--
ALTER TABLE `standarts`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `steels`
--
ALTER TABLE `steels`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `shipment`
--
ALTER TABLE `shipment`
  ADD CONSTRAINT `shipment_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`),
  ADD CONSTRAINT `shipment_ibfk_10` FOREIGN KEY (`type_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `shipment_ibfk_2` FOREIGN KEY (`diameter_id`) REFERENCES `diameters` (`id`),
  ADD CONSTRAINT `shipment_ibfk_3` FOREIGN KEY (`factory_id`) REFERENCES `factories` (`id`),
  ADD CONSTRAINT `shipment_ibfk_4` FOREIGN KEY (`finish_id`) REFERENCES `finishes` (`id`),
  ADD CONSTRAINT `shipment_ibfk_5` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`),
  ADD CONSTRAINT `shipment_ibfk_6` FOREIGN KEY (`segment_id`) REFERENCES `segments` (`id`),
  ADD CONSTRAINT `shipment_ibfk_7` FOREIGN KEY (`side_id`) REFERENCES `sides` (`id`),
  ADD CONSTRAINT `shipment_ibfk_8` FOREIGN KEY (`standart_id`) REFERENCES `standarts` (`id`),
  ADD CONSTRAINT `shipment_ibfk_9` FOREIGN KEY (`steel_id`) REFERENCES `steels` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
