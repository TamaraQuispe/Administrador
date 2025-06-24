<?php

// Mostrar errores para depuración (esto debe ir al inicio)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Asegura que la respuesta sea JSON
header('Content-Type: application/json');

// Tu código de login
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['usuario']) || !isset($data['contrasena'])) {
    echo json_encode(['success' => false, 'message' => 'Datos incompletos']);
    exit;
}

// Leer usuario y hash guardados
$path = '../Cambiar-Contraseña/usuario.txt';
if (!file_exists($path)) {
    echo json_encode(['success' => false, 'message' => 'No existe usuario']);
    exit;
}
$lines = file($path, FILE_IGNORE_NEW_LINES);
if (count($lines) < 2) {
    echo json_encode(['success' => false, 'message' => 'Archivo de usuario corrupto']);
    exit;
}
$savedUser = $lines[0];
$savedHash = $lines[1];

// Validar usuario y contraseña
if ($data['usuario'] === $savedUser && password_verify($data['contrasena'], $savedHash)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Usuario o contraseña incorrectos']);
}

?>