<?php
include "koneksi.php";

$arr = array();

$st = $pdo->query("select * from person");

$st->execute();

while($rs = $st->fetch(PDO::FETCH_ASSOC)){
    array_push($arr,$rs);
}

echo json_encode(array('person'=>$arr));
