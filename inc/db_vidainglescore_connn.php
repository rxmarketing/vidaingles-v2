<?php 
$db_conx = mysqli_connect("localhost", "vidaingl_ricardo", "51503060pEt0", "vidaingl_vidaingles");
if(mysqli_connect_errno()){
	echo "Lo siento, no pude conectarme a la base de datos.";
	exit();
}
// Change character set to utf8
mysqli_set_charset($db_conx,"utf8");
?>