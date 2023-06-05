var siswa = 
[
    {
        nama: 'Dul',
        ipk: 3.5,
        alamat: 'jakarta',
    },
    {
        nama: 'Drajad',
        ipk: 3.6,
        alamat: 'tangerang',
    },
    {
        nama: 'Nur',
        ipk: 3.7,
        alamat: 'bekasi',
    },
]

// menampilkan data satuan
// console.log( siswa[1].alamat )

// menampilkan data semua
for (let i=0; i < siswa.length; i++) {
    console.log( siswa[i].ipk )
    console.log( siswa[i].nama )
    console.log( siswa[i].alamat )
    console.log( '--------------------' )
}