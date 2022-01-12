<template>
  <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/roles">Role</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/datamobil">Data Mobil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/transaksi">Data Transaksi</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/datapelanggan">Data Pelanggan</router-link>
            </li>
          </ul>
        </div>
      </nav>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
</style>