<?php
include_once("../includes/database.php");

$country_id = $_GET["country_id"];

$db = Database::instance()->db();
$stmt = $db->prepare(
    "SELECT id AS city_id, city.city_name AS city_name 
        FROM city WHERE country_id = ? 
        ORDER BY city_name"
);

$stmt->execute(array($country_id));

$cities = $stmt->fetchAll();

// JSON encode them
echo json_encode($cities);
