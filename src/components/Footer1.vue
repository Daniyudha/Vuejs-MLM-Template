<template>
  <!-- START FOOTER -->
  <div>
    <nav class="navbar-f navbar-expand-lg navbar-light bg-white px-4 mt-5">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mr-3">
          <li class="px-2 nav-item">
            <router-link to="/" class="nav-f">Beranda</router-link>
          </li>
          <li class="px-2 nav-item">
            <router-link to="/tentangkami" class="nav-f">Tentang Kami</router-link>
          </li>
          <li class="px-2 nav-item">
            <router-link to="/product" class="nav-f">Produk Kami</router-link>
          </li>
          <li class="px-2 nav-item">
            <router-link to="/bisnisstrategi" class="nav-f">Business Plan</router-link>
          </li>
          <li class="px-2 nav-item">
            <router-link to="/berita" class="nav-f">Berita</router-link>
          </li>
          <li class="px-2 nav-item">
            <router-link to="/event" class="nav-f">Event</router-link>
          </li>
          <li class="px-2 nav-item">
            <router-link to="/galeri" class="nav-f">Galeri</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="page-footer-section fg-white" id="contact">
      <hr />
      <div class="container">
        <div class="row footer-middle justify-content-center">
          <div class="col-lg-4 col-md-10 col-sm-12 mb-5">
            <h5>lebahmadu co <b class="text-kuning">.</b></h5>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
          <div class="col-lg-2 offset-1 col-md-3">
            <h5>Hot links</h5>
            <ul class="list-unstyled text-small">
              <li><a href="index.html" class="">Home</a></li>
              <li><a href="Tentang Kami.html" class="">Tentang Kami</a></li>
              <li><a href="produk.html" class="">Produk Kami</a></li>
              <li><a href="business plan.html" class="">Business Plan</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-4">
            <h5>More info</h5>
            <ul class="list-unstyled text-small">
              <li><a href="#" class="">How it work</a></li>
              <li><a href="#" class="">About us</a></li>
              <li><a href="#" class="">Decline rules</a></li>
              <li><a href="#" class="">Terms & Conditions</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-4">
            <h5>Customer care</h5>
            <ul class="list-unstyled text-small">
              <li><a href="#" class="">FAQ</a></li>
              <li><a href="#" class="">Terms of use</a></li>
              <li><a href="#" class="">Privacy Policy</a></li>
              <li><a href="#" class="">Discount system</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div
      class="container-fluid"
      style="background-color: #fdffbc; padding: 4px; max-width: 2560px"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="mt-2 text-left col-lg-10 col-md-9">
            <p>&copy; Esoftdream All Right Reserved</p>
          </div>
          <div class="col-lg-2 col-md-3">
            <div class="row">
              <a href="#" target="_blank" class="mx-3" title="Instagram"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" target="_blank" class="mx-3" title="Instagram"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" target="_blank" class="mx-3" title="Instagram"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END FOOTER -->
</template>

<script>
export default {
  name: 'Footer1',
}
</script>