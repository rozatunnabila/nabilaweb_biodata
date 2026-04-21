<?php
require_once 'config.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    $data = $_POST;
}

if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    echo json_encode(['success' => false, 'message' => 'Semua field harus diisi']);
    exit;
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email tidak valid']);
    exit;
}

$name = $conn->real_escape_string($data['name']);
$email = $conn->real_escape_string($data['email']);
$message = $conn->real_escape_string($data['message']);

$sql = "INSERT INTO contact_messages (name, email, message)
        VALUES ('$name', '$email', '$message')";

if ($conn->query($sql)) {
    echo json_encode(['success' => true, 'message' => 'Pesan berhasil dikirim!']);
} else {
    echo json_encode(['success' => false, 'message' => $conn->error]);
}

$conn->close();
?>