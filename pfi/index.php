<?php
// Captura o parâmetro da URL (por exemplo, mysite.com/index.php?page=about)
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

// Monta o caminho para o arquivo da página
$pagePath = _DIR_ . '/' . $page . '.php';

// Verifica se o arquivo da página existe
if (file_exists($pagePath)) {
    // Inclui a página
    include($pagePath);
} else {
    // Página não encontrada
    echo 'Página não encontrada';
}
?>