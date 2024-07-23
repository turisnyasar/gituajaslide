
function getJumlah( arr ) {
	arrjumlah = []
	arrunique = []
	for (i=0; i<arr.length; i++) {
		// apabila tidak ada item arr[i] di dalam arrunique
		if (! arrunique.includes(arr[i]) )
			arrunique.push(arr[i])
	}
	for (i=0; i<arrunique.length; i++) {
		hitung = 0;
		for(j=0; j<arr.length; j++) {
			if (arr[j] == arrunique[i]) hitung++
		}
		arrjumlah.push( [arrunique[i], hitung] )
	}
	return arrjumlah
}


function getHarga( angka ) {
	 angka_baru = new Intl.NumberFormat("id-ID").format(angka)
	 return `Rp. ${angka_baru}`
}


function array2table(arr) {
	
	tabel = "<table cellpadding='5'>"
	// looping tr
	for (i=0; i<arr.length; i++) {
			tabel += "<tr>"	
		
		//looping td
		for(j=0; j<arr[i].length; j++) {
			tabel += "<td>" + arr[i][j] + "</td>"
		}
		tabel += "</tr>"
	}
	
	tabel += "</table>"
	return tabel
}