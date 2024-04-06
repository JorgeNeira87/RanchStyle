<?php
$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');

define('DB_HOST', 'localhost');
define('DB_NAME', 'banco');
define('DB_USER', 'root');
define('DB_PASSWORD', '');

try {
	$cnnPDO = new PDO("mysql:host=" . DB_HOST . "; dbname=" . DB_NAME, DB_USER, DB_PASSWORD,$utf8);
} catch (PDOException $e) {

echo $e;
}
?>


