<?php
include_once("../includes/session.php");

session_destroy();

$_SESSION["messages"][] = array("type" => "success", "content" => "Logged out!");

header("Location: ../pages/home.php");
