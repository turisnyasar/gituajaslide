<script src="functions.js"></script>


<form action="simpan-galeri.php" method="post"
      enctype="multipart/form-data">
Upload gambar
<input type="file" name="galeri" required
      accept=".jpg,.png"><br>
Caption
<input name="caption" required size="50"><br>
<input type="submit" name="submit">      
</form>      
<hr>
<h2>10 Galeri Teratas</h2>
<output id="hasil"></output>


<script>
url = "http://localhost/gituajaslide/get-galeri.php?count=10"
daftar = []

async function getGaleri() {
 hasilfetch = await fetch(url)
 hasiljson = await hasilfetch.json()
 proses( hasiljson )
}

function proses( objectData) {
 //console.log ( objectData )
 for (i=0; i<objectData.length; i++) {
   obj = objectData[i]
   caption = decodeURIComponent(obj.caption).replaceAll('+',' ')
   item = [ caption, `<img src="../gambar/${obj.gambar}" height="32">`, `<button onclick="hapus(${obj.ID})">Hapus</button>` ] 
   daftar.push( item )
 }    
 
 // memasukkan hasil tabel dom ke output hasil
 hasil.innerHTML = array2table(daftar) 
}

function hapus( ID_dihapus) {
 konfirmasi = confirm("Yakin ingin menghapus?")
 if (konfirmasi) 
  document.location = "hapus-galeri.php?id=" + ID_dihapus
}
getGaleri()
</script>
