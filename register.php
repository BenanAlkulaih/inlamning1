<?php

  // session_start();
  /*
  Array ( [fisrtname] => qwert [lastname] => x12345676543 [email] => beauty_lady909@hotmail.com [Password] => [replaypassword] => [inlineRadioOptions] => on [acceptera] => on [sign_in_] => )
  */
    if (isset($_POST['sign_in_'])){
        
        include('inc.php');
        
        $Firstname = $_POST['fisrtname'];
        $Lastname = $_POST['lastname'];
        $Email = $_POST['email'];
        $Password = $_POST['Password'];
       // $Conformpassword = $_POST['replaypassword'];
        $Type = $_POST['inlineRadioOptions'];
        $Acceptera = $_POST['acceptera'];
        if($Acceptera=="on"){$Acceptera = 1;}else {$Acceptera = 0;}
        if($Type=="on"){$Type = 1;}else {$Type = 0;}
        
        $sql = "INSERT INTO person (firstname, lastname , email , password , inlineRadioOptions, acceptera ) VALUES 
        ('".$Firstname."' ,'". $Lastname."','" .$Email ."','" .$Password ."', '". $Type ."', $Acceptera)";
         //echo $sql;
          
            //    echo  "username: " . $Anvandernamn;
               /* echo "  <br> Epostadress:" . $Epostadress;
                echo " <br>Adress:" . $Adress;
                echo " <br>Telefonnummer:" . $Telefonnummer;
                echo  "<br>Type:" . $Type;*/
               
            
        
               if ($db->query($sql) === TRUE) {

                 // $personid = $db->insert_personid;
                // $session["personid"] = $personid;
         
                  // header("location : index.php");
         ?>
         <div class="row">
                <h1 style="color:red">Tack för registrering, Välkommen <?= $Firstname?> <?= $Lastname?></h1>
         </div>
         
         
         <?php
                 }
                  // else {
        //    echo "error : " . $db->error;
    //    }
                
               
        $db->close();
    }
?>
