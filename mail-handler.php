<?php
    if(isset($_POST['submit'])) {
        $email=$_POST['email'];
        $msg=$_POST['msg'];

        $to='devme@lsaciasi.ro';
        $subject="Question from website | ".$email;
        $message="Email: ".$email."\nIntrebare: ".$msg;
        $headers="Location: index2.html";

        if(mail($to, $subject, $message)) {
            header("Location: index2.html");
        }
        else {
            echo "Ceva nu a mers bine...";
        }
    }
?>