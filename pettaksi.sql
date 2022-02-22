-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2022 at 02:04 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pettaksi`
--

-- --------------------------------------------------------

--
-- Table structure for table `pettaksi`
--

CREATE TABLE `pettaksi` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` text DEFAULT NULL,
  `location_a` varchar(25) DEFAULT NULL,
  `location_b` varchar(25) DEFAULT NULL,
  `contact_phone` varchar(20) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pettaksi`
--

INSERT INTO `pettaksi` (`id`, `name`, `email`, `date`, `time`, `location_a`, `location_b`, `contact_phone`, `comment`) VALUES
(1, 'Super User', 'filip.zivanovic1999@', '2022-02-12', '19:23', 'beohrad', 'mladenovac', '321321', ''),
(2, 'Super User', 'filip.zivanovic1999@', '2022-02-04', '19:40', 'Senaja', 'mladenovac', '234234', 'fsdfds'),
(3, 'Super User', 'fzivanovic2618s@raf.', '2022-02-12', '19:44', 'beohrad', 'kraqgujevac', '4234234434324324', ''),
(4, 'Filip Zivanovic', 'filip.zivanovic1999@', '2022-02-03', '19:46', 'Senaja', 'kraqgujevac', '3422423', ''),
(5, 'Super User', 'filip.zivanovic1999@', '2022-02-10', '19:52', 'Senaja', 'kraqgujevac', '41222222222', 'komentarrrrrrr'),
(6, 'Filip Zivanovic', 'fzivanovic2618s@raf.', '2022-02-14', '22:30', 'Senaja', 'Mali pozarevac', '0613456789', 'Teretana Kod svelogov'),
(7, 'Sule99', 'deja@gmail.com', '2022-02-12', '19:53', 'Senaja', 'Mali pozarevac', '543543', ''),
(8, 'Super User', 'filip.zivanovic1999@', '2022-02-05', '13:47', 'Senaja', NULL, '23432423', 'nemam'),
(9, 'Super User', 'filip.zivanovic1999@', '2022-02-11', '01:46', 'fsdfds', NULL, '242342', ''),
(10, 'Super User', 'filip.zivanovic1999@', '2022-02-04', '16:23', 'sfsd', NULL, '423423', 'fsdfsd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pettaksi`
--
ALTER TABLE `pettaksi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pettaksi`
--
ALTER TABLE `pettaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
