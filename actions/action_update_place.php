<?php
include_once("../includes/session.php");
include_once("../database/db_user.php");
include_once("../database/db_places.php");

$user_id = get_user_id($_SESSION["user_email"]);
$place_id = $_POST['place_id'];

update_place_info($_POST); 

if ($_FILES["image"]["name"] != "") {
    add_place_photo($place_id);  
}

header("Location: ../pages/profile.php?id=$user_id");