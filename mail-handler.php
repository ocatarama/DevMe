<?php
    if(isset($_POST['submit'])) {
        $email=$_POST['email'];
        $msg=$_POST['msg'];

        $to='devme@lsaciasi.ro';
        $subjet="Question from website | ".$email;
        $messaje="Email: ".$email."\n"."Intrebare: \n\n".$msg;
        $headers="From: ".$email;

        if(mail($to, $subject, $message, $headers)) {
            alert('Email-ul a fost trimis cu succes. Asteapta pe email un raspuns de la noi!');
            $email="";
            $msh="";
        }
        else
            alert('Ceva nu a mers cum trebuie...');
    }
?>