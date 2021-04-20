<template>
  <div class="home">
    <NavbarHome/>
    <HeroCarousel/>
    <!-- START CLIENT -->
  <div class="container-fluid" style="background-color: rgb(235, 235, 235); max-width: 2560px;">
    <div class="row py-4 wow fadeInDown">
      <div class="container">
        <img class="mx-5" :src="require('@/assets/images/beranda/nike.png')" alt="">
        <img class="mx-5" :src="require('@/assets/images/beranda/google.png')" alt="">
        <img class="mx-5" :src="require('@/assets/images/beranda/cocacola.png')" alt="">
        <img class="mx-5" :src="require('@/assets/images/beranda/pepsi.png')" alt="">
        <img class="mx-5" :src="require('@/assets/images/beranda/microsoft.png')" alt="">
      </div>
    </div>
  </div>
  <!-- END CLIENT -->

  <!-- START BISNIS DAN STRATEGI -->
  <div class="container  mt-5-5">
    <div class="text-center wow fadeInDown" data-wow-delay="200ms">
      <h5>Bisnis & Strategi</h5>
      <h4 class="font-weight-bold">lebahmadu co <b class="text-kuning">.</b></h4>
    </div>
  </div>
  <div class="container d-flex justify-content-center mt-5">
    <div class="row mt-4">
      <!-- Visi & Misi -->
      <div class="col-lg-4 col-md-4">
        <div class="card mb-5 py-4 px-2 mb-lg-0 wow zoomIn" data-wow-delay="300ms">
          <div class="card-body">
            <div class="text-center">
              <img class="text-center" :src="require('@/assets/images/beranda/visi-misi-icon.png')" alt="">
            </div>
            <h5 class="card-title text-center mt-4">Visi & Misi</h5>
            <p class="text-left mt-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
              out print, graphic or web designs.</p>
            <a class="text-left text-oren" href="#">Selengkapnya</a>
          </div>
        </div>
      </div>
      <!-- Strategi -->
      <div class="col-lg-4 col-md-4">
        <div class="card mb-5 py-4 px-2 mb-lg-0 wow zoomIn" data-wow-delay="600ms">
          <div class="card-body">
            <div class="text-center">
              <img class="text-center" :src="require('@/assets/images/beranda/bisnis-strategi-icon.png')" alt="">
            </div>
            <h5 class="card-title text-center mt-4">Bisnis & Strategi</h5>
            <p class="text-left mt-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
              out print, graphic or web designs.</p>
            <a class="text-left text-oren" href="#">Selengkapnya</a>
          </div>
        </div>
      </div>
      <!-- Produk Kualitas -->
      <div class="col-lg-4 col-md-4">
        <div class="card mb-5 py-4 px-2 mb-lg-0 wow zoomIn" data-wow-delay="900ms">
          <div class="card-body">
            <div class="text-center">
              <img class="text-center" :src="require('@/assets/images/beranda/produk-berkualitas-icon.png')" alt="">
            </div>
            <h5 class="card-title text-center mt-4">Produk Berkualitas</h5>
            <p class="text-left mt-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
              out print, graphic or web designs.</p>
            <a class="text-left text-oren" href="#">Selengkapnya</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Background -->
  <div class="position-relative z bgt">
    <img :src="require('@/assets/images/beranda/bg-section-2-3.png')" alt="">
  </div>
  <!-- Ilus -->
  <div class="row t1 mb-ilus mx-4-5 justify-content-center">
    <div class="wow fadeInLeft">
      <div class="ilus text-white">
        <h2>Honey Bee</h2>
        <p class="mt-2">Madu Alami Untuk <br> Kesehatan</p>
        <a href="produk.html"><button class="btn-transparant text-white rounded mt-2">Main Product</button></a>
      </div>
      <img class="z mx-3" :src="require('@/assets/images/beranda/ilus-produk-1.png')" alt="">
    </div>
    <div>
      <div class="row">
        <a href="produk.html">
          <div class="mx-3 produk-more wow fadeInDown" data-wow-delay="300ms">
            <div class="ilus text-white">
              <p class="text-dark mt-5">24 Items</p>
              <h2 class="text-dark">Bestsellers</h2>
              <p class="text-center">1</p>
            </div>
            <img class="z" :src="require('@/assets/images/beranda/ilus-more.png')" alt="">
          </div>
        </a>
        <div class="mx-1 wow fadeInRight" data-wow-delay="600ms">
          <div class="ilus text-white">
            <a href="produk.html">
              <button class="btn-transparant text-white rounded px-3">New</button>
            </a>
            <h4 class="mt-5-5">Madu Alami</h4>
          </div>
          <img class="z" :src="require('@/assets/images/beranda/ilus-produk-2.png')" alt="">
        </div>
      </div>
      <div class="mx-1 mt-4 wow fadeInUp" data-wow-delay="800ms">
        <div class="ilus text-white">
          <a href="produk.html">
            <button class="btn-transparant text-white rounded px-3">New</button>
          </a>
          <h4 class="mt-5-5">Madu Rasa Madu</h4>
        </div>
        <img class="z" :src="require('@/assets/images/beranda/ilus-produk-3.png')" alt="">
      </div>
    </div>
  </div>
  <!-- END BISNIS DAN STRATEGI -->

  <!-- START OUR PRODUCT -->
  <div class="mt-ilus row justify-content-center">
    <div class="col-lg-7 wow fadeInLeft">
      <img :src="require('@/assets/images/beranda/ilus-produk-section-3.png')" alt="">
    </div>
    <div class="col-lg-4 mt-5-5">
      <div class="wow fadeInRight">
        <h4 class="font-weight-bold">Our Product</h4>
        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
          designs. The passage is attributed to an unknown typesetter in the 15th century</p>
      </div>
      <a href="" class="list">
        <div class="row ml-1 mt-4 list-produk py-1 px-1 wow fadeInUp" data-wow-delay="200ms">
          <b class="numberCircle1 col-2">1</b>
          <p class="col-10">Lorem ipsum, or lipsum as it is sometimes known, is dummy text</p>
        </div>
      </a>
      <a href="" class="list">
        <div class="row ml-1 mt-3 list-produk py-1 px-1 wow fadeInUp" data-wow-delay="400ms">
          <b class="numberCircle2 col-2">2</b>
          <p class="col-10">Lorem ipsum, or lipsum as it is sometimes known, is dummy text</p>
        </div>
      </a>
      <a href="" class="list">
        <div class="row ml-1 mt-3 list-produk py-1 px-1 wow fadeInUp" data-wow-delay="600ms">
          <b class="numberCircle3 col-2">3</b>
          <p class="col-10">Lorem ipsum, or lipsum as it is sometimes known, is dummy text</p>
        </div>
      </a>
    </div>
    <div>
      <img :src="require('@/assets/images/tentang kami/bg-section-3.png')" alt="" srcset="">
    </div>
    <div class="offset-1"></div>
  </div>
  <!-- END PRODUCT -->

  <!-- Background -->
  <div class="position-relative z bgt bg-bunder">
    <img :src="require('@/assets/images/beranda/bg-bunder.png')" alt="">
  </div>

  <!-- START TESTIMONI -->
  <div class="container t1 wow fadeInDown">
    <div class="text-center">
      <h5>Testimonial</h5>
      <h4 class="font-weight-bold">We Care About Our Customer <br> Experience Too</h4>
    </div>
  </div>
  <div class="container">
  <div class="row d-flex justify-content-center mt-5">
    <article class="mt-5 col-lg-3 wow fadeInLeft" data-wow-delay="200ms">
      <figure>
        <img alt="" :src="require('@/assets/images/beranda/girl1.jpg')" />
      </figure>
      <div>
        <h1 class="font-weight-bold">Marvellous Macaw</h1>
        <h1>Member 2011</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate
          esse iure?
        </p>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-muted fa fa-star"></i></span>
      </div>
    </article>
    <article class="mt-5 col-lg-3 offset-1 wow fadeInUp" data-wow-delay="200ms">
      <figure>
        <img alt="" :src="require('@/assets/images/beranda/man2.jpg')" />
      </figure>
      <div>
        <h1 class="font-weight-bold">Marvellous Macaw</h1>
        <h1>Member 2011</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate
          esse iure?
        </p>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-muted fa fa-star"></i></span>
      </div>
    </article>
    <article class="mt-5 col-lg-3 offset-1 wow fadeInRight" data-wow-delay="200ms">
      <figure>
        <img alt="" :src="require('@/assets/images/beranda/girl2.jpg')" />
      </figure>
      <div>
        <h1 class="font-weight-bold">Marvellous Macaw</h1>
        <h1>Member 2011</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate
          esse iure?
        </p>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-warning fa fa-star"></i></span>
        <span class=""><i class="text-muted fa fa-star"></i></span>
      </div>
    </article>
    <div class="my-4">
      <!-- <button class=" btn-outline-info2 my-2 my-sm-0" type="submit">Learn More</button> -->
    </div>
  </div>
  </div>
  <!-- END TESTIMONI -->

  <Bergabung/>
  <Promo/>  
  <Footer1/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarHome from '@/components/NavbarHome.vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
import Bergabung from '../components/Bergabung.vue'
import Footer1 from '../components/Footer1.vue'
import Promo from '../components/Promo.vue'

export default {
  name: 'Home',
  components: {
    NavbarHome,
    HeroCarousel,
    Bergabung,
    Footer1,
    Promo
  }
}
</script>
