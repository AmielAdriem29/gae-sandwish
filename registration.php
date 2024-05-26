<?php
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "registration"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$First_Name = isset($_POST['firstName']) ? $_POST['firstName'] : '';
$Last_Name = isset($_POST['lastName']) ? $_POST['lastName'] : '';
$Birthday = isset($_POST['birthday']) ? $_POST['birthday'] : '';
$Gender = isset($_POST['gender']) ? $_POST['gender'] : '';
$Email = isset($_POST['email']) ? $_POST['email'] : '';
$Password = isset($_POST['password']) ? $_POST['password'] : ''; 


$sanitizedGender = '';
if (strtolower($Gender) === 'male' || strtolower($Gender) === 'female') {
    $sanitizedGender = ucfirst(strtolower($Gender)); 
} 


if (!filter_var($Email, FILTER_VALIDATE_EMAIL)) {
  echo "Invalid email format. Please enter a valid email address.";
  exit;
}


$sql = "INSERT INTO registered_users (First_Name, Last_Name, Birthday, Gender, Email, Password) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);


if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
}


$stmt->bind_param("ssssss", $First_Name, $Last_Name, $Birthday, $sanitizedGender, $Email, $Password);


if ($stmt->execute()) {
    echo "User has successfully been registered.";
} else {
    echo "Failed to register user: " . $stmt->error;
}


$stmt->close();
$conn->close();
?>