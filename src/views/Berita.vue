<template>
<div class="berita">
    <Navbar2/>
    <div class="container">
    <!-- START SLIDER -->
    <div class="text-center mt-5">
        <h5 class=" wow fadeInDown">Berita</h5>
        <h1 class="text-kuning font-weight-bold wow fadeInDown" data-wow-delay="300ms">HONEYBEE</h1>
        <SlideBerita/>
    </div>
    <!-- END SLIDER -->

    <!-- START LASTET NEWS -->
    <div class="container my-3">
        <h3 class="wow fadeInLeft" data-wow-delay="400ms">Lasted News</h3>
    </div>
    <div class="row justify-content-center wow fadeIn" data-wow-delay="900ms">
        <div class="card-berita body-berita col-lg-5 img-fluid mx-3 my-3">
            <img class="card-img-top rounded" :src="require('@/assets/images/berita/menhub.png')" alt="Card image cap">
            <div class="">
                <h6 class="mt-3 font-weight-bold">FINANCE > EKONOMI BISNIS</h6>
                <h4 class="mt-3 mb-4">Menhub: Keputusan Larangan Mudik Sudah FInal!</h4>
                <div class="row">
                    <div class="text-left text-muted col-6">
                        <p>SENIN, 5 APRIL 2021 10:20 WIB</p>
                    </div>
                    <div class="text-right col-6">
                        <!-- <a class="text-oren" href="view berita.html">Selengkapnya</a> -->
                        <router-link to="/viewberita" class="text-oren">Selengkapnya</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-berita body-berita col-lg-5 img-fluid mx-3 my-3">
            <img class="card-img-top rounded" :src="require('@/assets/images/berita/penyebab-kebakaran.png')" alt="Card image cap">
            <div class="">
                <h6 class="mt-3 font-weight-bold">FINANCE > ENERGI</h6>
                <h4 class="mt-3 mb-4">Penyebab Kebakaran Kilang Balongan Masih Misteri, Mungkinkah Disengaja?</h4>
                <div class="row">
                    <div class="text-left text-muted col-6">
                        <p>SENIN, 5 APRIL 2021 10:20 WIB</p>
                    </div>
                    <div class="text-right col-6">
                        <a class="text-oren" href="view berita.html">Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="card-berita body-berita col-lg-5 img-fluid mx-3 my-3">
            <img class="card-img-top rounded" :src="require('@/assets/images/berita/giant-pamulang.png')" alt="Card image cap">
            <div class="">
                <h6 class="mt-3 font-weight-bold">FINANCE > EKONOMI BISNIS</h6>
                <h4 class="mt-3 mb-4">Giant Pemulang Square Tutup, 87 Pegawai Kena PHK</h4>
                <div class="row">
                    <div class="text-left text-muted col-6">
                        <p>SENIN, 4 APRIL 2021 09:00 WIB</p>
                    </div>
                    <div class="text-right col-6">
                        <a class="text-oren" href="view berita.html">Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-berita body-berita col-lg-5 img-fluid mx-3 my-3">
            <img class="card-img-top rounded" :src="require('@/assets/images/berita/daftar-kecamatan.png')" alt="Card image cap">
            <div class="">
                <h6 class="mt-3 font-weight-bold">FINANCE > ENERGI</h6>
                <h4 class="mt-3 mb-4">Daftar Kecamatan yang Padam Listrik Imbas Bankir Bandang NTT</h4>
                <div class="row">
                    <div class="text-left text-muted col-6">
                        <p>SENIN, 4 APRIL 2021 09:00 WIB</p>
                    </div>
                    <div class="text-right col-6">
                        <a class="text-oren" href="view berita.html">Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="card-berita body-berita col-lg-3 img-fluid mx-4 my-3 pb-2">
            <img class="card-img-top rounded" :src="require('@/assets/images/berita/sumur-pertamina.png')" alt="Card image cap">
            <div class="">
                <h6 class="mt-3 font-weight-bold fa-xs">FINANCE > ENERGI</h6>
                <h4 class="mt-3 mb-4 fa-1x">Sumur Pertamia di Tarakan Keluarkan Lumpur Bau Menyengat</h4>
                <div class="row">
                    <div class="text-left text-muted col-6">
                        <p class="foot mt-2">SENIN, 3 APRIL 2021 12:00 WIB</p>
                    </div>
                    <div class="text-right col-6">
                        <a class="text-oren" href="#">Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-berita body-berita col-lg-3 img-fluid mx-5 my-3 pb-2">
            <img class="card-img-top rounded" :src="require('@/assets/images/berita/menhub.png')" alt="Card image cap">
            <div class="">
                <h6 class="mt-3 font-weight-bold fa-xs">FINANCE > EKONOMI BISNIS</h6>
                <h4 class="mt-3 mb-4 fa-1x">Menhub: Keputusan Larangan Mudik Sudah FInal!</h4>
                <div class="row">
                    <div class="text-left text-muted col-6">
                        <p class="foot mt-2">SENIN, 2 APRIL 2021 14:20 WIB</p>
                    </div>
                    <div class="text-right col-6">
                        <a class="text-oren" href="#">Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-berita body-berita col-lg-3 img-fluid mx-4 my-3 pb-2">
            <img class="card-img-top rounded" :src="require('@/assets/images/berita/giant-pamulang.png')" alt="Card image cap">
            <div class="">
                <h6 class="mt-3 font-weight-bold fa-xs">FINANCE > EKONOMI BISNIS</h6>
                <h4 class="mt-3 mb-4 fa-1x">Giant Pemulang Square Tutup, 87 Pegawai Kena PHK</h4>
                <div class="row">
                    <div class="text-left text-muted col-6">
                        <p class="foot mt-2">SENIN, 2 APRIL 2021 11:20 WIB</p>
                    </div>
                    <div class="text-right col-6">
                        <a class="text-oren" href="#">Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END LASTET NEWS -->
    </div>
    <Footer1/>
</div>
</template>

<script>
import Navbar2 from '../components/Navbar2.vue'
import SlideBerita from '../components/SlideBerita.vue'
import Footer1 from '../components/Footer1.vue'

export default {
    name: 'Berita',
    components: {
        Navbar2,
        SlideBerita,
        Footer1
    }
}
</script>
