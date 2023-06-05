//objek 1d
var siswa = {
    nama: 'Aji',
    jurusan: 'Akuntansi',
    ipk: 2.9,
    lulus: function() {
        if (this.ipk >= 2.5) {
            // return this.nama + ' lulus, dengan ipk: ' + this.ipk
            return `${this.nama} lulus, dengan ipk: ${this.ipk}`
        } else {
            return 'gagal'
        }
    }
}

console.log( siswa.nama )
console.log( siswa.ipk )
console.log( siswa.lulus() )