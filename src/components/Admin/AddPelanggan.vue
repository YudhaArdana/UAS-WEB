<template>
  <div class="container mt-5">
      <h3 class="box-title ">Tambah Data</h3>
       <form class="mt-5">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Id Pelangan</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Nama</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Alamat</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Telepon</label>
            <input type="number" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">email</label>
            <input type="email" class="form-control" id="exampleInputPassword1">
        </div>
        <!-- <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->
        <a href="#"> <button type="button" class="btn btn-primary">Save</button></a> ||
        <a href="/datapelanggan"> <button type="button" class="btn btn-danger">Cancel</button></a>
    </form>
  </div>
       
</template>

<script>
export default {
    name : "AddPelanggan"
}
</script>

<style>

</style>