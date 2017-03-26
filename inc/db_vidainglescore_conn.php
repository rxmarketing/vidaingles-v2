<?php
 $db_conx = new mysqli("localhost","vidaingl_ricardo","51503060pEt0","vidaingl_vidaingles");
    $db_conx->set_charset("utf8");
    if($db_conx->connect_errno) {
        echo "Lo sentimos, este sitio esta teniendo problemas, intentelo mas tarde. <br />";
        echo "ERRNO: " . $db_conx->connect_errno . "<br />";
        echo "ERROR: " . $db_conx->connect_error;
        exit;
    }
?>