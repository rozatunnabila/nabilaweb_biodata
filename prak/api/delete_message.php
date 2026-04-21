<?php
require_once 'config.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['id'])) {
    echo json_encode(['success' => false]);
    exit;
}

$id = intval($data['id']);

$sql = "DELETE FROM contact_messages WHERE id=$id";

if ($conn->query($sql)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$conn->close();
?>