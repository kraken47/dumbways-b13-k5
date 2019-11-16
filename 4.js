const hitungVoucher = (voucher, nominal) => {
    const potonganAsik = 0.5
    const potonganMantap = 0.3
  
    if (voucher === "DumbWaysAsik" && nominal >= 20000) {
      
      let diskon = nominal * potonganAsik
      if (diskon > 20000) { 
  diskon = 20000 
      }
      let tagihan = nominal - diskon
      let kembalian = nominal - tagihan
      console.log("Uang yang harus dibayar: "+tagihan);
      console.log("Potongan: "+diskon);
      console.log("Kembalian: "+kembalian);
  
    } else if (voucher === "DumbWaysMantap" && nominal >= 50000) {
      
      let diskon = nominal * potonganMantap
      if (diskon > 40000) { 
  diskon = 40000 
      }
      let tagihan = nominal - diskon
      let kembalian = nominal - tagihan
      console.log("Uang yang harus dibayar: "+tagihan);
      console.log("Diskon: "+diskon);
      console.log("Kembalian: "+kembalian);
    
    } else if (voucher === "DumbWaysMantap" && nominal < 50000) {
      console.log("minimal pembelanjaan 50000");
    } else if (voucher === "DumbWaysAsik" && nominal < 20000) {
      console.log("minimal pembelanjaan 20000");
    } else if (voucher === undefined) {
      console.log("Kode voucher yang kamu masukan salah");
    }
  }
  
  console.log(hitungVoucher("DumbWaysAsik", 30000));
  console.log(hitungVoucher("DumbWaysMantap", 60000));