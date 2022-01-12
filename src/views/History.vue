<template>
  <Navbar />
  <div class="container">
      <table class="table" style="margin-top: 100px;">
        <thead>
            <tr>
                <th scope="col">Tgl Pinjam</th>
                <th scope="col">Tgl Kembali</th>
                <th scope="col">Nama Mobil</th>
                <th scope="col">Total Pembayaran</th>
                <th scope="col">Status Pembayaran</th>
                <th scope="col">Status Peminjaman</th>
            </tr>
        </thead>
  <!-- <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody> -->
</table>
      </div>
    
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default { 
  name: "History", 
  components: {
    Navbar, 
  }

}
</script>

<style>

</style>