//pelamar
var umur = 18
var jeniskelamin = 'pria'
var agama = 'kristen'

//lowongan kerja ini hanya menerima
//umat kristen (wajib)
//minimal umur 25 (wajib)
//jk pria
//tinggi minimal 160 (optional)

if (agama == 'kristen') {
    if (umur >= 25) {
        if (jeniskelamin == 'pria') {
            console.log('anda lolos')
        } else {            
            console.log('anda bukan pria')
        }
    } else {
        console.log('anda terlalu muda')
    }
} else {
    console.log( 'tidak bisa, khusus kristen karena nanti wajib masuk saat idul fitri' )
}
