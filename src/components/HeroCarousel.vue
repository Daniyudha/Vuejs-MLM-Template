<template>
  <carousel
    :per-page="1"
    :navigate-to="someLocalProperty"
    :mouse-drag="true"
    :autoplay="true"
    :loop="true"
    :paginationEnabled="false"
  >
    <slide>
      <div class="container-fluid" style="background-image: url('/img/bg-1-1.png'); max-width: 2560px;">
      <div class="container">
        <div class="row justify-content-center align-items-center py-6" >
          <div class="col-lg-6 col-md-5 col-sm-12 g-slide wow fadeInLeft">
            <img class="img-fluid" :src="require('@/assets/images/beranda/image-slider-1 1.png')" alt="">
          </div>
          <div class="col-lg-6 col-md-7">
            <h1 class="text-kuning text-h1 wow fadeInRight" data-wow-delay="400ms">Honeybee</h1>
            <h2 class="text-kuning wow fadeInRight" data-wow-delay="600ms">Madu dengan beepolen</h2>
            <p class="mt-5 wow fadeInRight" data-wow-delay="800ms">Lorem ipsum, or lipsum as it is sometimes known, is
              dummy text used in laying
              out print, graphic or web designs.</p>
            <div class="row mt-4 wow fadeInUp" data-wow-delay="1000ms">
              <div class="col-3 text-center">
                <p>Calories</p>
                <p>210</p>
              </div>
              <div class="col-3 text-center">
                <p>Sugar</p>
                <p>11g</p>
              </div>
              <div class="col-3 text-center">
                <p>Total Fat</p>
                <p>5g</p>
              </div>
              <div class="col-3 text-center">
                <p>Sodium</p>
                <p>85mg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </slide>
    <slide>
      <div class="container-fluid" style="background-image: url('/img/bg-1-2.png'); max-width: 2560px;">
      <div class="container">
        <div class="row py-6 align-items-center">
          <div class="container col-lg-6 col-md-6 g-slide2">
            <div class="container">
              <h1 class="text-kuning text-h1 wow fadeInUp">Honeybee</h1>
              <h2 class="text-kuning wow fadeInLeft">Madu dengan beepolen</h2>
              <p class="mt-5 wow fadeInUp" data-wow-delay="400ms">Lorem ipsum, or lipsum as it is sometimes known, is
                dummy text used in laying
                out print, graphic or web designs.</p>
              <div class="row mt-4 wow fadeInUp" data-wow-delay="600ms">
                <div class="col-3">
                  <p>Calories</p>
                  <p>210</p>
                </div>
                <div class="col-2 text-center">
                  <p>Sugar</p>
                  <p>11g</p>
                </div>
                <div class="col-4 text-center">
                  <p>Total Fat</p>
                  <p>5g</p>
                </div>
                <div class="col-3 text-center">
                  <p>Sodium</p>
                  <p>85mg</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
            <img class="img-fluid" :src="require('@/assets/images/beranda/slider-2.png')" alt="">
          </div>
        </div>
      </div>
      </div>
    </slide>
    <slide>
      <div class="container-fluid" style="background-image: url(/img/bg-1-3.png); max-width: 2560px;">
      <div class="container py-6">
        <div class="py-5 text-center">
          <h2 class="text-kuning text-h1 wow fadeInDown" data-wow-delay="300ms">Honeybee</h2>
          <h3 class="text-kuning wow fadeInDown" data-wow-delay="300ms">Madu dengan beepolen</h3>
        </div>
        <div class="row justify-content-center align-items-center">
          <!-- <div class="container"> -->
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 text-lg-right text-lg-center wow fadeInLeft" data-wow-delay="100ms">
                <h5 class="font-weight-bold">Madu Beepolen</h5>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                  out print, graphic or web designs.</p>
              </div>
              <div class="col-lg-6 col-md-3 text-center">
                <!-- <h2 class="text-kuning text-h1 wow fadeInDown" data-wow-delay="300ms">Honeybee</h2>
                <h3 class="text-kuning mb-4 wow fadeInDown" data-wow-delay="300ms">Madu dengan beepolen</h3> -->
                <img class="wow gmb zoomIn" data-wow-delay="600ms" :src="require('@/assets/images/beranda/slider-3 1.png')" alt="">
              </div>
              <div class="col-lg-3 col-md-3 ml-auto">
                <div class="mt-lg-5-5 wow fadeInRight" data-wow-delay="500ms">
                  <h5 class="font-weight-bold">Keuntungan Madu Beepolen</h5>
                  <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs.</p>
                </div>
                <div class="mt-5 wow fadeInRight" data-wow-delay="700ms">
                  <h5 class="font-weight-bold">Kebaikan Madu Beepolen</h5>
                  <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs.</p>
                </div>
              </div>
            </div>
          <!-- </div> -->
        </div>
      </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "HeroCarousel",
  components: {
    Carousel,
    Slide,
  },
};
</script>
