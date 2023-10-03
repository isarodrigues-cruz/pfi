<?php

$servername = "localhost:3306";
$username = "root";
$password = "31888835";
$dbname = "bdpfi";

$conn = new mysqli($servername, $username, $password, $dbname);

//$msg = "passei por aqui"

// echo $msg 

if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$name', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        header('Location: cadastro.html');
    } else {
        echo "Erro ao cadastrar: " . $sql . "<br>" . mysqli_error($conn);
    }


$conn->close();
?>



