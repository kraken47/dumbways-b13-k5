let input =  [1,2,3,4,5];
let maxmin = [];

for(let a = 1; a <= input.length; a++){
	let nilai = 0;
	let temp = [];
	for(let b = 1; b <= input.length; b++){
		if(b !== a){
			nilai += + b;
			temp.push(b);
		}
	}
	maxmin.push(nilai);
	console.log("angka "+a+" : "+temp[0]+"+"+temp[1]+"+"+temp[2]+"+"+temp[3]+" = "+nilai);
}
console.log("Maka angka terbesar dan terkecilnya adalah "+ Math.max(...maxmin)+" & "+ Math.min(...maxmin));
