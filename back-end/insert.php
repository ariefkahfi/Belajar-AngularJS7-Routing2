<?php
include "koneksi.php";

$nama = $_POST['nama'];
$alamat = $_POST['alamat'];

$st = $pdo->prepare("insert into person (nama,alamat) values (:nama,:alamat)");

$st->bindParam(":nama",$nama,PDO::PARAM_STR);
$st->bindParam(":alamat",$alamat,PDO::PARAM_STR);

$b = $st->execute();

if($b){
    echo "Data berhasil dimasukkan ke dalam database";
}