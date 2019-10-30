/* 
use this sql query to create the database
and the table for the guests
check also config.php to set up your host name
and other impornt database configurations 
try to overcome connection errors 
*/

CREATE DATABASE myDB;

CREATE TABLE `users` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `comment` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;