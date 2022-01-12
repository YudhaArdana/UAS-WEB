<template>
  <div class="container mt-5">
      <h3 class="box-title ">Tambah Data Mobil</h3>
       <form class="mt-5">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Id Mobil</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Merek</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Harga</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <a href="#"> <button type="button" class="btn btn-primary me-2">Save</button></a> 
        <a href="/datamobil"> <button type="button" class="btn btn-danger">Cancel</button></a>
    </form>
  </div>
       
</template>

<script>
export default {
    name : "AddMobil"
}
</script>

<style>

</style>