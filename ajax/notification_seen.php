<?php
include_once("../includes/database.php");
include_once("../database/db_notifications.php");
include_once("../util/security_checks.php");

// Security check
if (verify_number($_POST["id"], "Notification")) {
    $num_notifications = get_read_notification_num($_POST["id"]);
    echo json_encode($num_notifications);
}
