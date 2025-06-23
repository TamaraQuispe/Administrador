<?php
// filepath: c:\Users\LAB-USR-LNORTE\Downloads\Administrador\Loggin\validar_login.php

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
$savedUser = $lines[0];
$savedHash = $lines[1];

// Validar usuario y contraseña
if ($data['usuario'] === $savedUser && password_verify($data['contrasena'], $savedHash)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Usuario o contraseña incorrectos']);
}
?>