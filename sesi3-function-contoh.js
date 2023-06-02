function hitungTHR( gaji, masakerja ) {
    if (masakerja > 12) {
        var rumusTHR = gaji
    } else {
        var rumusTHR = (gaji * masakerja) / 12
    }
    console.log( rumusTHR.toLocaleString('id-ID') )
}

var gaji_aji = 7000000
var masaKerja_aji = 12

var gaji_nur = 5900000
var masaKerja_nur = 11

hitungTHR( gaji_aji, masaKerja_aji )