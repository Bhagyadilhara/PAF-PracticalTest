-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 03:48 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthcaredb`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `userID` int(10) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `userAddress` varchar(100) NOT NULL,
  `nicNo` varchar(100) NOT NULL,
  `dateOfBirth` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `mobileNumber` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`userID`, `userName`, `userAddress`, `nicNo`, `dateOfBirth`, `gender`, `mobileNumber`, `email`, `password`) VALUES
(1, 'Bhagya', 'colombo 2      ', '976544348V', '1997-06-10', 'Male', '0772542314', 'bhagya@gmail.com', 'abc123#    '),
(2, 'Chanaka       ', 'No.3, highlevel road, kottawa', '963255657V', '1996-12-20', 'Male', '0112765432', 'chana96@gmail.com', 'Qwerty32'),
(3, 'Thilini', 'No.512, temple road, malabe', '985543990V', '1998-01-14', 'Female', '0753216971', 'thilip@gmail.com', '98thili#'),
(4, 'Pradeep', 'hanwalla road, avissawella', '965987216V', '1996-02-20', 'Male', '0786995832', 'pradeeH@gmail.com', 'A123B321p'),
(5, 'Kasun', 'Rathnapura', '970085447V', '1997-09-30', 'Male', '0722984254', 'kasun1997@gmail.com', 'Kasun987#');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `userID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
