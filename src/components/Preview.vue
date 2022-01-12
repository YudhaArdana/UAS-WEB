<template>
    <div class="container-fluid bg-color px-5 py-5 ">
        <p
        class="
            py-2
            text-light
            fs-2
            fw-bold
            teks-center
            justify-content-center
            d-flex
        "
        >
        LIST MOBIL
        </p>
        <div class="row row-cols-1 row-cols-md-3 g-4 px-5">
            <div class="col">
                <div class="card text-color1">
                <img src="../assets/img/car1.jpg" class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <p class="card-text fs-5 fw-bold text-color">Rp 2.000.000/hari</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-color1">
                <img src="../assets/img/car1.jpg" class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <p class="card-text fs-5 fw-bold text-color">Rp 2.000.000/hari</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-color1">
                <img src="../assets/img/car1.jpg" class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <p class="card-text fs-5 fw-bold text-color">Rp 2.000.000/hari</p>
                </div>
                </div>
            </div>
            <!-- <div class="col">
                <div class="card text-color1">
                    <img src="../assets/img/car1.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text fs-5 fw-bold text-color">Rp 2.000.000/hari</p>
                    </div>
                </div>
            </div> -->
        </div>

        <router-link to="/list" class="text-decoration-none">
            <div class="px-5">
                <button
                    class="mx-auto btn btn-primary btn-light mt-5 py-2 d-flex"
                    type="submit"
                    >
                    Explore More
                </button>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "Preview",
};
</script>

<style>
</style>