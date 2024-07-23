var dataSlide
var slideW 
var slideH
var lokasi 
var url = "http://localhost/gituajaslide/get-galeri.php?count=10"

var currentSlide = 0

var posisi = []

var nomorInterval 

function buatStyles() {
 tagStyle = document.createElement("style")
 tagStyle.type = "text/css"
 tagBody = document.getElementsByTagName("body")[0]
 tagBody.appendChild( tagStyle )
 
 for(i=1; i<=dataSlide.length; i++) {
  isileft = (i-1) * slideW * -1
  posisi.push( "posisi" + i)
  tagStyle.innerHTML += `.posisi${i} { 
   left: ${isileft}px; transition:1s; }\n`
  
 }


 tambahan = `
 .bingkaiLuar { width: ${slideW}px; height: ${slideH}px; }
 .slideItem { width:${slideW}px; }
 .slideItem SPAN { top:${slideH - 40}px; }
 .panahKiri { top: ${(slideH/2)-10}px; }
 .panahKanan { top: ${(slideH/2)-10}px; 
               left:${slideW - 30}px;}`
 
 tagStyle.innerHTML += tambahan
 susunSlide()
}

function buatSlide ( targetlokasi ) {

 lokasi = document.getElementById (targetlokasi)
 getData()
 
}

function setUkuran() {
 src1 = dataSlide[0].gambar
 gambar1 = new Image()
 gambar1.src = "gambar/" + src1
 gambar1.onload = function() {
  slideW = gambar1.naturalWidth
  slideH = gambar1.naturalHeight
  buatStyles()
 }
}

function loadSlide(dataX) {
 dataSlide  = dataX 
 setUkuran()
}

function susunSlide(){

 bingkaiLuar = document.createElement("DIV")
 bingkaiLuar.className = "bingkaiLuar"
 lokasi.appendChild(bingkaiLuar)

 bingkaiDalam = document.createElement("DIV")
 bingkaiDalam.id = "bingkaiDalam"
 bingkaiLuar.appendChild(bingkaiDalam)
 // mula-mula pasang posisi1
 bingkaiDalam.className = posisi[currentSlide]


 for (i=0; i<dataSlide.length; i++) {

  ID = dataSlide[i].ID
  caption = dataSlide[i].caption
  gambar = dataSlide[i].gambar 

  slide = document.createElement("DIV")
  slide.className = "slideItem"

  image = new Image(slideW, slideH)
  image.src = "gambar/" + gambar

  teks = document.createElement("SPAN")
  teks.textContent = decodeURI(caption).replaceAll('+', ' ') 

  slide.appendChild(image)
  slide.appendChild(teks)

  bingkaiDalam.appendChild( slide )
 }

 nomorInterval = setInterval( gantiSlide, 6000)


 panahkiri = document.createElement("button")
 panahkiri.className = "panah panahKiri"
 bingkaiLuar.appendChild(panahkiri)
 panahkiri.textContent = "<<"
 panahkiri.onclick = kekiri


 panahkanan = document.createElement("button")
 panahkanan.className = "panah panahKanan"
 bingkaiLuar.appendChild(panahkanan)
 panahkanan.textContent = ">>"
 panahkanan.onclick = kekanan

}


function kekanan() {
 if (currentSlide == 0) {
  currentSlide = posisi.length - 1
 }
 else {
  currentSlide --
 }
 klik()
}

function klik() {
 clearInterval(nomorInterval)
 bingkaiDalam.className = posisi[currentSlide]
 nomorInterval = setInterval( gantiSlide, 6000)
}

function kekiri() {
 if (currentSlide == posisi.length - 1) {
  currentSlide = 0
 }
 else {
  currentSlide ++
 }
 klik()
}



async function getData() {

 let dataDB = await fetch(url)
 let dataJSON = await dataDB.json()
 loadSlide(dataJSON)

}

function gantiSlide() {
 if(currentSlide < posisi.length - 1) {
  currentSlide ++
 }
 else {
  currentSlide = 0
 }
 bingkaiDalam.className = posisi[currentSlide]
}