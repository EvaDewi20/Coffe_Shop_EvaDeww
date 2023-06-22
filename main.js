// fungsi kode dibawah ini khusus untuk tampilan website di ukuran mobile

// pertama kita seleksi elemen class header dan navbar dari html
// lalu kita simpan di dalam variabel dengan nama navbar
let navbar = document.querySelector(".header .navbar");

// pada kode ini, ketika di klik hamburger menunya akan menampilkan navbarnya
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

// dan dikode ini ketika di klik akan menghilangkan navbar nya
document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};
