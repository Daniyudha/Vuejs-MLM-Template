<template>
  <div id="app">
  <div class="container">
    <carousel class=" berita-carousel" :responsive="{0:{items:1,nav:false},600:{items:1.33,nav:false}}" 
    :center="true" :loop="true" :dots="false">
        <div class="item">
                        <div class="slider-card">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <img class="ron" :src="require('@/assets/images/berita/menhub.png')" alt="">
                                </div>
                                <div class="col-6">
                                    <h6 class="font-weight-bold text-left">FINANCE > EKONOMI BISNIS</h6>
                                    <h5 class="mt-1 mb-1 font-weight-bold text-left">Menhub: Keputusan Larangan Mudik Sudah FInal!
                                    </h5>
                                    <div class="row">
                                        <div class="col-7 text-muted col-6 text-left">
                                            <p class="font-kecil">SENIN, 5 APRIL 2021 10:20 WIB</p>
                                        </div>
                                        <div class="col-5">
                                            <a class="text-oren font-kecil" href="view berita.html">Selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="slider-card">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <img class="ron" :src="require('@/assets/images/berita/daftar-kecamatan.png')" alt="">
                                </div>
                                <div class="col-6">
                                    <h6 class="font-weight-bold text-left">FINANCE > ENERGI</h6>
                                    <h5 class="mt-1 mb-1 text-left font-weight-bold">Daftar Kecamatan yang Padam Listrik Imbas Bankir Bandang NTT
                                    </h5>
                                    <div class="row">
                                        <div class="col-7 text-left text-muted col-6">
                                            <p class="font-kecil">SENIN, 5 APRIL 2021 10:20 WIB</p>
                                        </div>
                                        <div class="col-5">
                                            <a class="text-oren font-kecil" href="view berita.html">Selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="slider-card">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <img class="ron" :src="require('@/assets/images/berita/penyebab-kebakaran.png')" alt="">
                                </div>
                                <div class="col-6 align-items-center">
                                    <h6 class="font-weight-bold text-left">FINANCE > ENERGI</h6>
                                    <h4 class="mt-1 mb-1 text-left font-weight-bold">Penyebab Kebakaran Kilang Balongan Masih
                                        Misteri, Mungkinkah
                                        Disengaja?</h4>
                                    <div class="row">
                                        <div class="col-7 text-left text-muted col-6">
                                            <p class="font-kecil">SENIN, 5 APRIL 2021 10:20 WIB</p>
                                        </div>
                                        <div class="col-5">
                                            <a class="text-oren font-kecil" href="view berita.html">Selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "SlideBerita",
  components: { carousel },
  data() {
      return {
        
      }
    },
};
</script>

