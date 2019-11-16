const generate = (jumlah) => {
	for (let i = 0; i < jumlah; i++){
	 	let charPool = "abcdefghijklmnopqrstuvwxyz0123456789";
        let charSet = "";
        let acak;
	 		 	for (let j = 0; j < 4; j++){
	 		for (let k = 0; k < 4; k++){
	 			let hasil = Math.floor(Math.random() * charPool.length);
	 			acak = charPool.substring(hasil, hasil+1);
	 			charSet = charSet.concat(acak);
	 		}
	 		charSet = charSet.concat("-");
	 	}
	 	charSet = charSet.substring(0, charSet.length-1);
	 	console.log(charSet);
	 }
}

generate(3); 