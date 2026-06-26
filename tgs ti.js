<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>QAL-SHOPPING</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">

<style>

body{
    background:#f5f5f5;
}

.effect-totop{
    transition:.3s;
}

.effect-totop:hover{
    transform:translateY(-10px);
}

.card img{
    height:250px;
    object-fit:cover;
}

.navbar-brand img{
    width:55px;
    height:55px;
    object-fit:cover;
    border-radius:50%;
}

</style>

</head>

<body>

<!-- NAVBAR -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

<div class="container">

<a class="navbar-brand d-flex align-items-center" href="#">

<img src="/ChatGPT Image Jun 26, 2026, 11_56_37 AM.png" alt="Logo">

<div class="ms-2">

<h5 class="mb-0">QAL-SHOPPING</h5>

<small class="text-warning">Premium Steak</small>

</div>

</a>

<div class="mx-auto" style="width:45%;">

<div class="input-group">

<input type="text" class="form-control" placeholder="Cari Produk...">

<button class="btn btn-light">

<i class="bi bi-search"></i>

</button>

</div>

</div>

<button class="btn btn-light position-relative" onclick="lihatKeranjang()">

<i class="bi bi-cart3 fs-5"></i>

<span
id="cart-count"
class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">

0

</span>

</button>

</div>

</nav>

<!-- ISI -->

<div class="container py-4">

<h2 class="mb-4">

Daftar Produk

</h2>

<div class="btn-group mb-4">

<button class="btn btn-outline-primary active">

Semua

</button>

<button class="btn btn-outline-primary">

Daging Ayam

</button>

<button class="btn btn-outline-primary">

Daging Sapi

</button>

<button class="btn btn-outline-primary">

Daging Kambing

</button>

<button class="btn btn-outline-primary">

Lainnya

</button>

</div>

<div class="row g-4">

<!-- PRODUK 1 -->

<div class="col-md-4 effect-totop">

<div class="card h-100 shadow">

<img src="Steak Sapi Simple 1.jpg" class="card-img-top">

<div class="card-body">

<h5 class="card-title">

Steak Sapi Premium

</h5>

<p class="text-danger fw-bold fs-4">

Rp130.000

</p>

<span class="badge bg-secondary">

Daging Sapi

</span>

<button
class="btn btn-success w-100 mt-3"
onclick="tambahKeranjang('Steak Sapi Premium',130000)">

<i class="bi bi-cart-plus"></i>

Masukkan Keranjang

</button>

</div>

</div>

</div>

<!-- PRODUK 2 -->

<div class="col-md-4 effect-totop">

<div class="card h-100 shadow">

<img src="Steak Sapi Simple 1.jpg" class="card-img-top">

<div class="card-body">

<h5 class="card-title">

Steak Sapi Original

</h5>

<p class="text-danger fw-bold fs-4">

Rp130.000

</p>

<span class="badge bg-secondary">

Daging Sapi

</span>

<button
class="btn btn-success w-100 mt-3"
onclick="tambahKeranjang('Steak Sapi Original',130000)">

<i class="bi bi-cart-plus"></i>

Masukkan Keranjang

</button>

</div>

</div>

</div>

<!-- PRODUK 3 -->

<div class="col-md-4 effect-totop">

<div class="card h-100 shadow">

<img src="daging slice.jpg" class="card-img-top">

<div class="card-body">

<h5 class="card-title">

Daging Slice

</h5>

<p class="text-danger fw-bold fs-4">

Rp115.000

</p>

<span class="badge bg-secondary">

Daging Slice

</span>

<button
class="btn btn-success w-100 mt-3"
onclick="tambahKeranjang('Daging Slice',115000)">

<i class="bi bi-cart-plus"></i>

Masukkan Keranjang

</button>

</div>

</div>

</div>

</div>

</div>
 
<script>

let keranjang=[];

function tambahKeranjang(nama,harga){

keranjang.push({

nama:nama,

harga:harga

});

document.getElementById("cart-count").innerHTML=keranjang.length;

alert(nama+" berhasil ditambahkan ke keranjang.");

}

function lihatKeranjang(){

if(keranjang.length==0){

alert("Keranjang masih kosong.");

return;

}

let isi="========= KERANJANG =========\n\n";

let total=0;

keranjang.forEach(function(item,index){

isi+=(index+1)+". "+item.nama+" - Rp"+item.harga.toLocaleString('id-ID')+"\n";

total+=item.harga;

});

isi+="\n==========================\n";

isi+="TOTAL : Rp"+total.toLocaleString('id-ID');

alert(isi);

}

</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>