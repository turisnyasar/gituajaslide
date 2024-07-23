<?php
include "koneksi.php";

$count = isset($_GET['count'])? 
 (int) $_GET['count'] : 0;

$sql = " SELECT * FROM galeri ";

$tambahan = $count>0? " LIMIT 0, $count" : "";

$hasil = mysqli_query($koneksi, $sql.$tambahan);

if(mysqli_num_rows($hasil) > 0) {
 $data = [];
 while($baris=mysqli_fetch_assoc($hasil)) {
  $data[] = $baris;
 }
 echo json_encode( $data );
}