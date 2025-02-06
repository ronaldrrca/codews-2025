<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : '';

    // Configurar el correo
    $to = "ronaldrrca@gmail.com"; // Cambia esto por el correo al que se enviará el mensaje
    $subject = "Nuevo mensaje de " . $nombre;
    $body = "Nombre: " . $nombre . "\n";
    $body .= "Correo: " . $email . "\n";
    $body .= "Mensaje: \n" . $mensaje;
    $headers = "From: " . $email;

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Correo enviado con éxito.";
    } else {
        echo "Hubo un problema al enviar el correo.";
    }
}
?>
