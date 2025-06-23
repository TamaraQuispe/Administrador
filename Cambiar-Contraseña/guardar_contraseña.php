<?php
// filepath: c:\Users\LAB-USR-LNORTE\Downloads\Administrador\Cambiar-Contraseña\guardar_contrasena.php

// Recibe datos JSON
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['usuario']) || !isset($data['nuevaContrasena'])) {
    echo json_encode(['success' => false, 'message' => 'Datos incompletos']);
    exit;
}

// Hashear la contraseña
$nuevaHash = password_hash($data['nuevaContrasena'], PASSWORD_DEFAULT);

// Guardar usuario y hash en usuario.txt
file_put_contents('usuario.txt', $data['usuario'] . "\n" . $nuevaHash);

echo json_encode(['success' => true]);
?>