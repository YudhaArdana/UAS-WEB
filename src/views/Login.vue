<template>
    <div class="containerr">
        <div class="card login-form">             
            <div class="card-body">
                    <img src="../assets/img/logo.png" alt="" class="img img-fluid mb-4">
              <h2 class="card-title text-center">Login</h2>
              <h6 class="card-subtitle text-muted mb-5 fw-bold text-center">Please login to use this site!</h6>
              <form>
                <div class="mb-4">
                  <label for="exampleInputEmail1" class="form-label">Email*</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password*</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Min 8 character">
                </div>

                <div class="d-flex justify-content-between">
                    <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>

                    <div>
                        <a href="#" class="link">Forgot Password ?</a>
                    </div>
                </div>

                <div class="d-grid mt-5">
                    <button type="submit" class="btn btn-primary w-100">Login</button>
                </div>

                <div class="mt-3">
                    <label>Not registered yet ? <router-link  to="/Signup">create an account</router-link></label>
                </div>
              </form>
            </div>
          </div>
    </div>
</template>




<script>

export default {
  name:'Login',
  }

</script>

<style >


.containerr {
    display:grid;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin:8%;
}

.img{
  width: 400px;
}

input[type="email"],
input[type="password"] {
    border-color: blue;
    border-style: solid;
    border-width: 0 0 1px 0;
}

.btn{
  border-radius: 20px;

}
</style>
