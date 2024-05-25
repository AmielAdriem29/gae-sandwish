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
$Password = isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_BCRYPT) : '';


if (empty($First_Name) || empty($Last_Name) || empty($Email) || empty($Password)) {
    die("Required fields are missing.");
}

$sanitizedGender = '';
if ($Gender === 'Male') {
    $sanitizedGender = 'Male';
} elseif ($Gender === 'Female') {
    $sanitizedGender = 'Female';
}

$sql = "INSERT INTO registered_users (First_Name, Last_Name, Birthday, Gender, Email, Password) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
}

$stmt->bind_param("ssssss", $First_Name, $Last_Name, $Birthday, $sanitizedGender, $Email, $Password);

if ($stmt->execute()) {
    echo "User successfully added to the database.";
} else {
    echo "Failed to add user to the database: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
