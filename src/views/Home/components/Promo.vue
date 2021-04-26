<template>
  <div id="app">
    <div class="container mt-5">
    <div class="text-center">
      <h3 class="font-weight-bold">Berita / Promo</h3>
      <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h5>
    </div>
  </div>
    <carousel class="stack-carousel" :responsive="{0:{items:1.2,nav:false,navText:false},600:{items:2.2,nav:true}}" 
    :center="true" :loop="true" :dots="false" :navText="navSlide">
    <div class="item text-center">
      <img class="ron" :src="require('@/assets/images/beranda/slide-1.jpg')" alt="">
      <h3 class="font-weight-bold mt-3 h-p-sm">Penjualan Madu Meningkat</h3>
      <p class="font-italic p-p-sm">by Supriyana</p>
    </div>
    <div class="item text-center">
      <img class="ron" :src="require('@/assets/images/beranda/slide-2.jpg')" alt="">
      <h3 class="font-weight-bold mt-3 h-p-sm">Panduan MLM</h3>
      <p class="font-italic p-p-sm">by Nanang Wicaksana</p>
    </div>
    <div class="item text-center">
      <img class="ron" :src="require('@/assets/images/beranda/slide-3.jpg')" alt="">
      <h3 class="font-weight-bold mt-3 h-p-sm">Business Managemen</h3>
      <p class="font-italic p-p-sm">by Supriyana</p>
    </div>
    <div class="item text-center">
      <img class="ron" :src="require('@/assets/images/beranda/slide-4.jpg')" alt="">
      <h3 class="font-weight-bold mt-3 h-p-sm">Digital Marketing</h3>
      <p class="font-italic p-p-sm">by Nanang Wicaksana</p>
    </div>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "App",
  components: { carousel },
  data() {
      return {
        navSlide: [
          '<i class="promo-nav promo-prev fas fa-chevron-left"></i>',
          '<i class="promo-nav promo-next fas fa-chevron-right"></i>'
        ]
      }
    },
};
</script>

