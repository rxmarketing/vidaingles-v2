<?php 
    
    $to = "ricomxmarketing@gmail.com";
            $from = "auto_responder@vidaingles.com";
            $headers ="From: $from\n";
            $headers .= "MIMEVersion: 1.0\n";
            $headers .= "Contenttype: text/html; charset=iso88591 \n";
            $subject ="Vida Ingles Contrasena Temporal";
            $msg = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Contrase�a temporal Vida Ingl�s</title></head><body style="margin:0px; font-family:Tahoma, Geneva, sans-serif;"><div style="padding:10px; background:#333; font-size:20px; color:#CCC;"><a href="http://vidaingles.com"><img src="http://vidaingles.com/i/logo50x50.png" width="36" height="30" alt="Vida Ingl�s" style="border:none; float:left;"></a>&nbsp;Contrase�a temporal</div><div style="padding:24px; font-size:17px;"><h2>Hola '.$ausername.'</h2><p>Este es un mensaje autogenerado. Si no solicitaste una contrase�a temporal, por favor ignora este mensaje.</p><p>Has indicado que has olvidado tu contrase�a para inicio de sesi�n. Hemos  generado una contrase�a temporal para que puedas iniciar sesi�n, luego, una vez iniciado sesi�n podr�s cambiar la contrase�a a una de tu elecci�n.</p><p>Despu�s de hacer clic a bot�n de abajo tu contrase�a temporal ser�:<br /> <b>'.$tempPass.'</b></p><p><a href="http://vidaingles.com/forgotpass.php?u='.$ausername.'&p='.$hashTempPass.'"><button style="background-color:#222;color:#fff;padding:8px;font-size:15px;">Clic aqu� para inicar sesi�n con tu contrase�a temporal</button></a></p><p>Si no haces clic al bot�n, ningun cambio se har� a tu cuenta. Para cambiar tu contrase�a de inicio de sesi�n a esta contrase�a temporal debes hacer clic al bot�n de arriba.</p></div></body></html>';
            mail($to,$subject,$msg,$headers);
    
    
    ?>