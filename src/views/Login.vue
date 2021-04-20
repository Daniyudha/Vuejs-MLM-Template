<template>
    <div class="login">
  <!-- START NAVBAR -->
  <header class="header" id="header">
    <nav class="container mt-4 navbar navbar-expand-lg navbar-light bg-navtk rounded px-4">
      <router-link to="/" class="navbar-brand">lebahmadu co<b style="color: rgb(248, 211, 0);">.</b></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mr-3">
          <li class="px-2 nav-item">
            <router-link to="/signup" class="btn-outline-info2 my-2 px-4 my-sm-0 ron" type="submit">Register</router-link>
          </li>
        </ul>
        
        <!-- <a href="login.html"><button class="btn-outline-info2 my-2 my-sm-0" type="submit">Join Now</button></a> -->
      </div>
    </nav>
  </header>
  <!-- END NAVBAR -->

    <!-- START KONTEN -->
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-5">
            <h4 class="font-weight-bold mt-des wow fadeInLeft" data-wow-delay="200ms">Login to your account</h4>
            <form action="" method="POST" class="my-4">
                <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="400ms">
                    <p class="text-dark">E-mail</p>
                    <span class="far fa-envelope icon"></span>
                    <input type="text" class="form-control" name="" placeholder="Your e-mail" required>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="600ms">
                    <p class="text-dark">Password</p>
                    <span class="fas fa-key icon"></span>
                    <input type="password" class="form-control" name="password" placeholder="password" required>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
            </form>
            <div class="row justify-content-start">
                <div class="wow fadeInUp" data-wow-delay="800ms">
                <router-link to="/signup" class="btn-outline-info2 px-4 ml-3" type="submit">Register</router-link>
                </div>
                <div class="wow fadeInUp" data-wow-delay="800ms">
                    <button type="submit" class="btn-hubungi px-5 ml-5" name="login">Login</button>
                </div>
            </div>
            <div class="row mt-4 wow fadeInUp" data-wow-delay="1000ms">
                <div class="ml-3">
                    <div class="form-cek">
                        <input type="checkbox" id="html">
                        <label for="html">Remember me</label>
                    </div>
                </div>
                <div class="ml-3">
                    <a href="" class="text-muted">Forgot password?</a>
                </div>
            </div>
        </div>
        <div class="col-lg-7 mt-ilus wow fadeInUp" data-wow-delay="1200ms">
            <img :src="require('@/assets/images/login/ilus-login.png')" alt="">
        </div>
    </div>
    </div>
    <!-- END KONTEN -->
    </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>