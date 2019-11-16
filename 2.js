let totalBelanja = 110500;
let uangYangDimasukkan = 100000 * 2;

const transaksi = (totalBelanja, uangYangDimasukkan) => {
  let kembalian = uangYangDimasukkan - totalBelanja;

const uangPecahan = [50000,20000,10000,5000,2000,1000,500];
  for (let i = 0; i < uangPecahan.length; i++) {
    if (kembalian/uangPecahan[i] >= 1) {
    let banyakPecahan = Math.floor(kembalian/uangPecahan[i])
    let nominalPecahan = uangPecahan[i]
    console.log(banyakPecahan+' x '+nominalPecahan)
    let prosesKembalian = banyakPecahan*nominalPecahan
    kembalian -= prosesKembalian
  };
};
if (kembalian !== 0) {
  console.log(kembalian+' disumbangkan karena tidak ada pecahan uang dibawah Rp.500');
}
};

console.log(transaksi(totalBelanja, uangYangDimasukkan));
