//For/In Loop

//membuat objek dan mengisi atribut objek
let siswa = {
    nama: "Kusuma Seta",
    gender: "Wanita",
    jurusan: "RPL",
    usia: "300",
    alamat: "Ngantru"
}

//menampilkan atribut yang dimiliki objek siswa
for(key in siswa){
    console.log(key);
}