<template>
  <div class="container pb-5">
    <div class="row" style="margin-top: 80px;">
      <div class="col-md-8">
        <img src="../assets/img/car1.jpg" alt="" class="vh-90 w-100">
      </div>
      <div class="col-md-4">
        <h2 class=""> Nama Mobil</h2>
        <!-- <div class="card" style="width: 18rem;"> -->
          <p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Informasi Mobil
            </button>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur non neque eveniet et, vel molestias sit, laudantium porro impedit repudiandae similique dolorem vitae ex quae, magnam enim dicta ut?
            </div>
        </div>
        <!-- </div> -->
        <div class="form-group mt-3">
          <label for="nama">Nama Lengkap</label>
          <input type="text" style="width: 100%;" id="nama" class="border border-1 border-secondary rounded">
        </div>

        <div class="form-group mt-3">
          <label for="peminjaman">Tanggal Peminjaman</label>
          <input type="date" style="width: 100%;" id="peminjaman" class="border border-1 border-secondary rounded">
        </div>

         <div class="form-group mt-3">
          <label for="pengembalian">Tanggal Pengembalian</label>
          <input type="date" style="width: 100%;" id="pengembalian" class="border border-1 border-secondary rounded">
        </div>

         <div class="form-group mt-3">
          <label for="waktupeminjaman">Waktu Peminjaman</label>
          <input type="time" style="width: 100%;" id="waktupeminjaman" class="border border-1 border-secondary rounded">
        </div>

         <div class="form-group mt-3">
          <label for="waktupengembalian">Waktu Pengembalian</label>
          <input type="time" style="width: 100%;" id="waktupengembalian" class="border border-1 border-secondary rounded">
        </div>
        
        <router-link to="/berhasil">
            <button class="btn btn-lg btn-primary mt-3" style="width: 100%;">Pesan Sekarang</button>
        </router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "Detail"
}
</script>

<style>
/* input[type="text"],
input[type="date"],
input[type="time"]{
  border-radius: 5px;
} */
</style>