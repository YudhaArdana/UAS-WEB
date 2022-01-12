<template>
    <footer class="bg-light pt-4">
        <p
        class="
            py-2
            text-color
            fs-2
            fw-bold
            teks-center
            justify-content-center
            d-flex
        "
        >
        ABOUT
        </p>
        <div class="container-fluid"></div>
            <div class="row row-cols-3 row-cols-md-3 g-4 mx-5 text-color1">
                <div class="col">
                    <img class="img-fluid ps-3 mx-auto d-block" src="../assets/img/logo.png" alt="logo" width="170" height="61">
                    
                </div>
                <div class="col px-4">
                    <h4 class="fs-4">LOREM IPSUM</h4>
                        <p class="text-color1 fs-6 fw-normal mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aperiam? Itaque amet impedit distinctio quisquam alias vel illo dolores dicta, optio aperiam, ipsa reiciendis, eos maxime pariatur doloremque tempore odit.
                        </p>
                </div>
                <div class="col">
                    <h4 class="fs-4">CONTACT</h4>
                    <ul class="list-unstyled footer-link-list fs-6 mt-3 fw-normal">
                        <li>
                            <i class="fab fa-whatsapp-square"></i>
                            <a class="text-decoration-none text-color1" href="https://api.whatsapp.com/send?phone=6285858971812">Whatsapp: 085858971812</a>
                        </li>
                        <li>
                            <i class="fas fa-envelope-square"></i>
                            <a class="text-decoration-none text-color1" href="mailto:rentcar@gmail.com">Email: rentcar@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        <div class="container-fluid mt-5 py-2 fs-6 footer border-top">
            <p class="pt-3">2021 RentCar | UAS WEB</p>
        </div>
    </footer>
</template>

<script>
export default {
    name : "Footer"
}
</script>

<style>

</style>