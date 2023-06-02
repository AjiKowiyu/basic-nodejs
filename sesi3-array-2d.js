var siswa = [
    ['abdul', 's1', 'bekasi', 30, true],        //array baris ke-0
    ['nur', 's2', 'tangerang', 29, true],       //array baris ke-1
    ['drajad', 's3', 'jakarta', 31, false],     //array baris ke-2
    //array detail ke- 0, 1, 2, 3, 4, 5
]

console.log( siswa[1][2] )
console.log( siswa.length )
console.log( siswa[0].length )

for (let i = 0; i < siswa.length; i++) {
    console.log( '=========' )
    for (let j = 0; j < siswa[i].length; j++) {
        console.log( siswa[i][j] )
    }
}