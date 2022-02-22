<?php

$name = $_POST['name'];
$email = $_POST['email'];
$date = $_POST['date'];
$time = $_POST['time'];
$location_a = $_POST['location_a'];
$location_B = $_POST['location_B'];
$contact_phone = $_POST['contact_phone'];
$comment = $_POST['comment'];

$conn=new mysqli('localhost', 'root', '', 'pettaksi');

if($conn->connect_error){
    die('Connection to database failed!' .$conn->connect_error);
}else{
    $stmt=$conn->prepare("Insert into pettaksi(name, email, date, time, location_a, location_b, contact_phone, comment) values (?,?,?,?,?,?,?,?)");
    $stmt->bind_param("ssssssss", $name, $email, $date, $time, $location_a, $location_b, $contact_phone, $comment); 
    $stmt->execute();
    
    $stmt->close();
    $conn->close();
    header("Location: ../../index.php");
}

?>