<template>
<div class="tentangkami">
  <Navbar1/>
  <!-- START HERO -->
  <div class="container">
  <div class="row">
    <div class="col-lg-4 mt-des wow fadeInLeft" data-wow-delay="400ms">
      <h1>Tentang Kami</h1>
      <h6>Honeybee Madu dengan Beepolen</h6>
      <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
        out print, graphic or web designs.</p>
    </div>
    <div class="col-lg-4 wow fadeInDown mt-5-5">
      <img class="" :src="require('@/assets/images/tentang kami/section-1-tentang-kami.png')" alt="">
    </div>
    <div class="mt-ilus col-lg-3 offset-lg-1">
      <div class="row mb-5 wow fadeInUp" data-wow-delay="400ms">
        <img class="box" :src="require('@/assets/images/tentang kami/visi-misi.png')" alt="">
        <h6 class="mt-4 ml-3 font-weight-bold">Visi & Misi</h6>
      </div>
      <div class="row mb-5 wow fadeInUp" data-wow-delay="600ms">
        <img class="box" :src="require('@/assets/images/tentang kami/bisnis-strategi.png')" alt="">
        <h6 class="mt-4 ml-3 font-weight-bold">Bisnis & Strategi</h6>
      </div>
      <div class="row mb-5 wow fadeInUp" data-wow-delay="800ms">
        <img class="box" :src="require('@/assets/images/tentang kami/produk-berkualitas.png')" alt="">
        <h6 class="mt-4 ml-3 font-weight-bold" font-weight-bold>Produk Berkualitas</h6>
      </div>
    </div>
  </div>
  </div>
  <!-- END HERO -->

  <!-- START DESKRIPSI -->
  <div class="container">
  <div class="text-center mt-5 container t">
    <h5 class="font-weight-bold wow fadeInDown">TENTANG KAMI</h5>
    <h5 class="wow fadeInDown" data-wow-delay="200ms">SELAMAT DATANG DI KELUARGA BESAR <b
        class="text-kuning">HONEYBEE</b></h5>
    <p class="wow fadeInDown" data-wow-delay="400ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      luctus purus et augue scelerisque tempus. In
      tellus enim, vulputate sit amet arcu facilisis, sagittis posuere ipsum.</p>
    <p class="wow fadeInDown" data-wow-delay="600ms">Praesent mattis pretium odio sit amet mattis. Etiam maximus felis
      sed tincidunt facilisis. Integer eu est turpis.
      Maecenas faucibus eu risus eu fringilla. Nunc a rutrum velit. Ut in ex vel ligula venenatis commodo. Mauris
      pulvinar sit amet arcu vitae auctor. Cras a vestibulum ipsum. Aliquam id bibendum massa.</p>

    <a href=""><img class="wow zoomIn" data-wow-delay="800ms" :src="require('@/assets/images/tentang kami/bg-video.png')" alt=""></a>
  </div>
  </div>
  <!-- END DESKRIPSI -->

  <div class="position-relative bgt">
    <img class="w-100" :src="require('@/assets/images/beranda/bg-2-3.png')" alt="">
  </div>

  <!-- START VISI MISI -->
  <div class="t2">
  <div class="row w-100 d-flex justify-content-center mt-5-5  wow fadeInDown">
    <img class="box" :src="require('@/assets/images/tentang kami/visi-misi.png')" alt="">
    <h6 class="mt-4 ml-3 font-weight-bold">Visi & Misi</h6>
  </div>
  <div class="container">
  <div class="row justify-content-center mt-5">
    <div class="col-lg-5 col-md-4">
      <div class="card mb-5 py-1 px-2 mb-lg-0 wow zoomIn" data-wow-delay="200ms">
        <div class="card-body">
          <h5 class="card-title text-left font-weight-bold">Visi</h5>
          <p class="text-left mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus purus et
            augue scelerisque tempus. In tellus enim, vulputate sit amet arcu facilisis, sagittis posuere ipsum. Nunc
            id magna id lectus iaculis molestie eu vel turpis. Vivamus in sapien eget risus eleifend accumsan.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin et massa sit
            amet erat aliquet condimentum.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-5 col-md-4">
      <div class="card mb-5 py-1 px-2 mb-lg-0 wow zoomIn" data-wow-delay="500ms">
        <div class="card-body">
          <h5 class="card-title text-left font-weight-bold">Misi</h5>
          <p class="text-left mt-4">Praesent mattis pretium odio sit amet mattis. Etiam maximus felis sed tincidunt
            facilisis. Integer eu est turpis. Maecenas faucibus eu risus eu fringilla. Nunc a rutrum velit. Ut in ex
            vel ligula venenatis commodo. Mauris pulvinar sit amet arcu vitae auctor. Cras a vestibulum ipsum. Aliquam
            id bibendum massa. Maecenas interdum nisl quis velit consequat, sit amet venenatis mi varius. Proin et massa sit
            amet erat aliquet condimentum.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <!-- END VISI MISI -->

  <!-- START BISNIS STRATEGI -->
  <div class="row w-100 mt-card d-flex justify-content-center wow fadeInDown">
    <img class="box" :src="require('@/assets/images/tentang kami/bisnis-strategi.png')" alt="">
    <h6 class="mt-4 ml-3 font-weight-bold">Bisnis & Strategi</h6>
  </div>
  <div class="container">
  <div class="row justify-content-center mt-5">
    <div class="col-lg-5 col-md-4">
      <div class="card py-1 px-2 mb-lg-0 wow zoomIn" data-wow-delay="200ms">
        <div class="card-body">
          <div class="text-center">
            <img class="text-center" :src="require('@/assets/images/tentang kami/satu-platform.png')" alt="">
          </div>
          <h5 class="card-title text-center font-weight-bold mt-3">Satu Platform,</h5>
          <h6 class="text-center text-kuning font-weight-bold">Menyelesaikan Segalanya</h6>
          <p class="text-left mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus purus et
            augue scelerisque tempus.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-5 col-md-4">
      <div class="card py-1 px-2 mb-lg-0 wow zoomIn" data-wow-delay="500ms">
        <div class="card-body">
          <div class="text-center">
            <img class="text-center" :src="require('@/assets/images/tentang kami/manajemen-cepat.png')" alt="">
          </div>
          <h5 class="card-title text-center font-weight-bold mt-3">Manajemen Cepat,</h5>
          <h6 class="text-center text-kuning font-weight-bold">Mudah diatur</h6>
          <p class="text-left mt-4">Praesent mattis pretium odio sit amet mattis. Etiam maximus felis sed tincidunt
            facilisis. Integer eu est turpis.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- END BISNIS STRATEGI -->
  
  <!-- Background -->
  <div class="position-relative bgt">
    <img class="w-100" :src="require('@/assets/images/beranda/bg-3-4.png')" alt="">
  </div>

  <!-- START PRODUK BERKUALITAS -->
  <div class="container">
  <div class="row t2">
    <div class="col-lg-5 offset-lg-1 mt-des ">
      <div class="row wow fadeInLeft">
        <img class="box" :src="require('@/assets/images/tentang kami/produk-berkualitas.png')" alt="">
        <h6 class="mt-4 ml-3 font-weight-bold">Produk Berkualitas</h6>
      </div>
      <p class="mt-4 ml-pro wow fadeInLeft" data-wow-delay="200ms">Curabitur aliquet nulla non pretium ornare. Integer
        interdum sodales risus, non ultrices
        sem vulputate vel.
        Nulla facilisi. Vivamus quis sagittis purus. Donec nec odio risus. Fusce aliquet dapibus justo, non tincidunt
        purus tristique sed. Phasellus elit eros, vulputate at massa suscipit, scelerisque molestie diam.</p>
    </div>
    <div class="col-lg-5 offset-lg-1">
      <div>
        <h3 class="m-branding wow fadeInUp" data-wow-delay="600ms">BRANDING UNTUK <br> BISNIS ANDA</h3>
        <img class="ml-produk wow fadeInRight" :src="require('@/assets/images/tentang kami/branding.png')" alt="">
      </div>
      <div class="mt-3">
        <h3 class="m-solusi wow fadeInUp" data-wow-delay="1000ms">Solusi <br> Pengembangan</h3>
        <img class="wow fadeInRight" data-wow-delay="400ms" :src="require('@/assets/images/tentang kami/solusi.png')" alt="">
      </div>
      <div class="mt-3 mb-5">
        <h3 class="m-branding wow fadeInUp" data-wow-delay="1400ms">Produk <br> Rancangan Bisnis</h3>
        <img class="ml-produk wow fadeInRight" data-wow-delay="800ms" :src="require('@/assets/images/tentang kami/produk.png')" alt="">
      </div>
    </div>
  </div>
  </div>
  <!-- END PRODUK BERKUALITAS -->
  <Bergabung/>
  <Footer2/>
</div>
</template>

<script>
import Navbar1 from '../components/Navbar1.vue'
import Bergabung from '../components/Bergabung.vue'
import Footer2 from '../components/Footer2.vue'

export default {
  name: 'TentangKami',
  components: {
    Navbar1,
    Bergabung,
    Footer2
  }
}
</script>