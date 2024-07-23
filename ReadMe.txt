Ini adalah contoh slideshow sederhana sebagai 
contoh membuat slideshow javascript yang tinggal
dipanggil saja. Tidak perlu disetting lagi.

Secara otomatis script akan mengambil 10 data slideshow teratas, lalu dengan memanfaatkan resolusi dari gambar pertama, maka script akan membuat sebuah slideshow pada halaman dengan ukuran yang sama.

Syarat :

1. Memanggil file-file berikut :

   <link rel="stylesheet" href="slide-css.css">
   <script src="slide.js"></script>
	 
2. Membuat elemen berikut pada HTML 
   (id-nya terserah) :
	 
   <div id="lokasiSlide"></div>
	 <script>
	  buatSlide( "lokasiSlide" )
	 </script>
	 
3. Ukuran resolusi semua gambar harus sama