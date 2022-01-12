<template>
  <!-- <div class="container mt-5">
        <div class="container-fluid ">
        <div class="row">
                    <div class="col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Data Transaksi</h3>
                            <div class="table-responsive mt-5">
                                <table class="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th class="border-top-0">No</th>
                                            <th class="border-top-0">Id Transaksi</th>
                                            <th class="border-top-0">Id User</th>
                                            <th class="border-top-0">Id Mobil</th>
                                            <th class="border-top-0">Tanggal Sewa</th>
                                            <th class="border-top-0">Tanggal Kembali</th>
                                            <th class="border-top-0">Total</th>
                                            <th class="border-top-0">Status</th>
                                            <th class="border-top-0">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>T001</td>
                                            <td>P001</td>
                                            <td>M001</td>
                                            <td>4 Januari 2022</td>
                                            <td>5 Januari 2022</td>
                                            <td>Rp 400.000,00</td>
                                            <td>Belum Lunas</td>
                                            <td> 
                                                <router-link to="#">
                                                        <button type="button" class="btn btn-primary">Detail</button>
                                                    </router-link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div> -->

  <NavbarAdm />
  <div class="container-fluid">
    <div class="row vh-100">
      <Sidebar />
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="chartjs-size-monitor">
          <div class="chartjs-size-monitor-expand"><div class=""></div></div>
          <div class="chartjs-size-monitor-shrink"><div class=""></div></div>
        </div>
        <div
          class="
            d-flex
            justify-content-between
            flex-wrap flex-md-nowrap
            align-items-center
            pt-3
            pb-2
            mb-3
            border-bottom
          "
        >
          <h1 class="h2">Data Transaksi</h1>
        </div>
        <div class="table-responsive mt-5">
          <table class="table text-nowrap">
            <thead>
              <tr>
                <th class="border-top-0">No</th>
                <th class="border-top-0">Id Transaksi</th>
                <th class="border-top-0">Id User</th>
                <th class="border-top-0">Id Mobil</th>
                <th class="border-top-0">Tanggal Sewa</th>
                <th class="border-top-0">Tanggal Kembali</th>
                <th class="border-top-0">Total</th>
                <th class="border-top-0">Status</th>
                <th class="border-top-0">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>T001</td>
                <td>P001</td>
                <td>M001</td>
                <td>4 Januari 2022</td>
                <td>5 Januari 2022</td>
                <td>Rp 400.000,00</td>
                <td>Belum Lunas</td>
                <td>
                  <router-link to="#">
                    <button type="button" class="btn btn-primary">
                      Detail
                    </button>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <canvas
          class="my-4 w-100 chartjs-render-monitor"
          id="myChart"
          width="625"
          height="263"
          style="display: block; width: 625px; height: 263px"
        ></canvas>

        <!-- <h2>Section title</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>text</td>
                <td>random</td>
                <td>layout</td>
                <td>dashboard</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>placeholder</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>placeholder</td>
                <td>tabular</td>
                <td>information</td>
                <td>irrelevant</td>
              </tr>
              <tr>
                <td>1,008</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,009</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,010</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,011</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,012</td>
                <td>text</td>
                <td>placeholder</td>
                <td>layout</td>
                <td>dashboard</td>
              </tr>
              <tr>
                <td>1,013</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>visual</td>
              </tr>
              <tr>
                <td>1,014</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,015</td>
                <td>random</td>
                <td>tabular</td>
                <td>information</td>
                <td>text</td>
              </tr>
            </tbody>
          </table>
        </div> -->
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdm from "@/components/NavbarAdm.vue";

export default {
  name: "Transaksi",
  components: {
    NavbarAdm,
    Sidebar,
  },
};
</script>

<style>
</style>