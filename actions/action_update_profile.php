<?php
include_once("../includes/session.php");
include_once("../database/db_user.php");
include_once("../util/security_checks.php");

// Verify if user is logged in
if (!isset($_SESSION["user_email"]))
    die(header('Location: ../pages/home.php'));

// Verifies CSRF token
if ($_SESSION["csrf"] != $_POST["csrf"]) {
    $_SESSION["messages"][] = array("type" => "error", "content" => "Invalid request!");
    die(header("Location: ../pages/home.php"));
}

$user_id = get_user_id($_SESSION["user_email"]);

// Security checks
if (
    !verify_number($_POST["id"], "Id") ||
    !verify_person_name($_POST["first_name"], "First Name") ||
    !verify_person_name($_POST["last_name"], "Last Name") ||
    !verify_email($_POST["email"]) ||
    !verify_phone_number($_POST["phone_number"])
) die(header('Location: ../pages/home.php'));

if($_POST["password"] != null && !verify_password($_POST["password"])) {
    die(header('Location: ../pages/home.php'));
}

if ($user_id != $_POST["id"]) {
    $_SESSION["messages"][] = array("type" => "error", "content" => "Can\'t edit this profile!");
    die(header("Location: ../pages/home.php"));
}

// Set up of data from input
$profile_info = array(
    "id" => $_POST["id"],
    "first_name" => $_POST["first_name"],
    "last_name" => $_POST["last_name"],
    "email" => $_POST["email"],
    "phone_number" => $_POST["phone_number"],
    "password" => $_POST["password"]
);

update_profile($profile_info); 

if ($_FILES["image"]["name"] != "") {
    update_profile_pic($user_id);  
}

$_SESSION["messages"][] = array("type" => "success", "content" => "Profile Updated!");

header("Location: ../pages/profile.php?id=$user_id");
