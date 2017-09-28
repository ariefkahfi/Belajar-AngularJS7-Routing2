<?php
include "koneksi.php";

$id = $_GET['id'];

$st = $pdo->prepare("delete from person where id = ? ");

$st->bindParam(1,$id,PDO::PARAM_INT);

$b = $st->execute();

