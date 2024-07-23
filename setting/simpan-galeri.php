<?php

if(!isset($_POST["submit"])) {
 header("location: galeri.php");
 exit;
}


include "../koneksi.php";

$caption = urlencode( $_POST["caption"] );
$upload = $_FILES["galeri"];
$temporary = $upload["tmp_name"];
$nama = $upload["name"];
$filesimpan = "../gambar/$nama"; 

move_uploaded_file( $temporary, $filesimpan);

$sql = " INSERT INTO galeri(caption, gambar)
         VALUE( '$caption', '$nama' ) ";
$hasil = mysqli_query($koneksi, $sql);

header("location: galeri.php");
