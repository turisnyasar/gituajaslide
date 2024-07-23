<?php
include "../koneksi.php";
$id = $_GET["id"];

// sebelum dihapus, ambil dulu nama gambarnya
$sql2 = " SELECT gambar FROM  galeri
          WHERE ID = $id ";
$hasil2 = mysqli_query  ($koneksi, $sql2 )
or die( mysqli_error($koneksi) );

$gambar = mysqli_fetch_assoc($hasil2);
$namagambar = $gambar["gambar"];



$sql = " DELETE FROM galeri
         WHERE ID  = $id ";
$hasil = mysqli_query($koneksi, $sql)
         or die( mysqli_error($koneksi) );

unlink( "../gambar/$namagambar");
header("location: galeri.php");