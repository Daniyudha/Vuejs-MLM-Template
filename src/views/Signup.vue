<template>
    <div class="signup">
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
            <router-link to="/login" class="btn-outline-info2 px-3 my-2 my-sm-0 ron" type="submit">Join Now</router-link>
          </li>
        </ul>
      </div>
    </nav>
    </header>
    <!-- END NAVBAR -->

    <!-- START KONTEN -->
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-5 mt-ilus">
            <h4 class="font-weight-bold mt-4 wow fadeInLeft" data-wow-delay="200ms">Sign up</h4>
            <form action="" method="POST" class="my-4">
                <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="400ms">
                    <p class="text-dark">Name</p>
                    <span class="far fa-user icon"></span>
                    <input type="text" class="form-control" name="" placeholder="Full name" required>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="600ms">
                    <p class="text-dark">Mobile number</p>
                    <span class="fas fa-mobile-alt icon"></span>
                    <input type="text" class="form-control" name="password" placeholder="0813-XXXX-XXXX" required>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="800ms">
                    <p class="text-dark">E-mail</p>
                    <span class="far fa-envelope icon"></span>
                    <input type="text" class="form-control" name="" placeholder="Your e-mail" required>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="1000ms">
                    <p class="text-dark">Password</p>
                    <span class="fas fa-key icon"></span>
                    <input type="password" class="form-control" name="password" placeholder="password" required>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
            </form>
            <div class="row justify-content-start wow fadeInUp" data-wow-delay="1200ms">
                <div class="">
                <router-link to="/login" class="btn-outline-info2 px-4 ml-3" type="submit">Login</router-link>
                </div>
                <div class="">
                    <button type="submit" class="btn-hubungi px-4 ml-5" name="login">Sign up</button>
                </div>
            </div>
        </div>
        <div class="col-lg-7 mt-pro wow fadeInUp" data-wow-delay="1400ms">
            <img :src="require('@/assets/images/login/ilus-sign-up.png')" alt="">
        </div>
    </div>
    </div>
    <!-- END KONTEN -->
    </div>
</template>

<script>
export default {
    name: 'Signup',
}
</script>