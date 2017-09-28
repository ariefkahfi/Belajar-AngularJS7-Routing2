<?php
include "koneksi.php";

$id = $_GET['id'];

$json= null;

try{
    $st = $pdo->prepare("select * from person where id = ? ");

    $st->bindParam(1,$id,PDO::PARAM_INT);
    $st->execute();

    while($rs = $st->fetch(PDO::FETCH_ASSOC)){
        $json = $rs;
    }
}catch (Exception $e){
   echo $e->getMessage();
}
//$person['person']=$json;

echo json_encode($json);
