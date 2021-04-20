<template>
    <div class="event">
    <!-- START SLIDER -->
    <Navbar2/>
    <div class="text-center mt-5">
        <h5 class="wow fadeInDown" data-wow-delay="200ms">Event</h5>
        <h1 class="text-kuning font-weight-bold wow fadeInDown" data-wow-delay="500ms">HONEYBEE</h1>
    </div>
    <SlideEvent/>
    <!-- END SLIDER -->

    <!-- START EVENT GALLERY -->
        <div class="text-center">
            <h3 class="text-kuning mb-4 wow fadeInDown" data-wow-delay="700ms">EVENT GALLERY</h3>
            <form class="form-search wow fadeInDown" data-wow-delay="900ms" method="get" action="#">
                <input type="search" name="search" placeholder="Nama / tgl event">
                <button type="submit" class="rounded"><span class="fa fa-search"></span></button>
            </form>
        </div>
        <div class="container">
        <div class="row justify-content-center mt-5 wow fadeIn" data-wow-delay="1300ms">
            <div class="card-berita body-berita col-5 img-fluid mx-4 my-4">
                <img class="card-img-top rounded" :src="require('@/assets/images/event/seminar-besar.png')" alt="Card image cap">
                <div class="">
                    <h6 class="mt-3 font-weight-bold">20 DESEMBER 2020</h6>
                    <h4 class="mt-3 mb-3">SEMINAR BESAR KOTA TEGAL</h4>
                    <a href="" class="text-muted" data-toggle="modal" data-target="#seminar">
                        <p>LIHAT DETAIL &xrarr;</p>
                    </a>
                </div>
            </div>
            <div class="card-berita body-berita col-5 img-fluid mx-4 my-4">
                <img class="card-img-top rounded" :src="require('@/assets/images/event/seminar-kota-tasik.png')" alt="Card image cap">
                <div class="">
                    <h6 class="mt-3 font-weight-bold">20 DESEMBER 2020</h6>
                    <h4 class="mt-3 mb-3">SEMINAR BESAR KOTA TEGAL</h4>
                    <a href="" class="text-muted" data-toggle="modal" data-target="#seminar">
                        <p>LIHAT DETAIL &xrarr;</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="card-berita body-berita col-5 img-fluid mx-4 my-4">
                <img class="card-img-top rounded" :src="require('@/assets/images/event/seminar-kota-tasik.png')" alt="Card image cap">
                <div class="">
                    <h6 class="mt-3 font-weight-bold">20 DESEMBER 2020</h6>
                    <h4 class="mt-3 mb-3">SEMINAR BESAR KOTA TEGAL</h4>
                    <a href="" class="text-muted" data-toggle="modal" data-target="#seminar">
                        <p>LIHAT DETAIL &xrarr;</p>
                    </a>
                </div>
            </div>
            <div class="card-berita body-berita col-5 img-fluid mx-4 my-4">
                <img class="card-img-top rounded" :src="require('@/assets/images/event/seminar-besar.png')" alt="Card image cap">
                <div class="">
                    <h6 class="mt-3 font-weight-bold">20 DESEMBER 2020</h6>
                    <h4 class="mt-3 mb-3">SEMINAR BESAR KOTA TEGAL</h4>
                    <a href="" class="text-muted" data-toggle="modal" data-target="#seminar">
                        <p>LIHAT DETAIL &xrarr;</p>
                    </a>
                </div>
            </div>
        </div>
        </div>
    <!-- END EVENT GALLERY -->

    <!-- Modal Seminar -->
    <div id="seminar" class="modal fade">
        <div class="modal-dialog modal-lg modal-scroll modal-body-scroll modal-dialog-centered ron">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <img class="ron position-fixed img-modal" src="assets/images/event/seminar-besar.png"
                                alt="">
                        </div>
                        <div class="col-6">
                            <h5>SEMINAR BESAR KOTA TEGAL</h5>
                            <h6 class="font-weight-bold mt-3">Tempat</h6>
                            <p>Jl. Perintis Kemerdekaan No.25, Panggung, Kec. Tegal Timur, Kota Tegal, Jawa Tengah 52122
                            </p>
                            <div class="row">
                                <div class="col-4">
                                    <p class="font-weight-bold">Waktu</p>
                                    <p class="fa-xs">Pukul 19.00 WIB</p>
                                </div>
                                <div class="col-5">
                                    <p class="font-weight-bold">Kontak Person</p>
                                    <p class="fa-xs">0813-3467-8198</p>
                                </div>
                                <div class="col-3 text-center">
                                    <p class="font-weight-bold">HTM</p>
                                    <p class="fa-xs">-</p>
                                </div>
                            </div>
                            <p>Masa Pandemi Covid-19 membuat pola pendidikan berubah. Semula proses belajar mengajar
                                dilakukan dengan tatap muka. Tetapi kini, proses belajar mengajar dilakukan secara jarak
                                jauh dengan memanfaatkan jaringan internet, serta teknologi informasi dan komunikasi
                                (TIK).
                            </p>
                            <p>Dari segi manfaat, dilakukannya pembelajaran jarak jauh (PJJ) telah menjejakkan proses
                                pendidikan di tanah air ke arah digitalisasi. Namun di sisi lain, hal itu juga
                                menimbulkan hambatan. Bagi daerah yang mengalami kendala akses internet dan ketiadaan
                                gawai karena rendahnya tingkat ekonomi masyarakat PJJ cukup sulit untuk dilakukan.
                                Selain itu, proses belajar mengajar yang membutuhkan praktek secara langsung juga
                                mengalami kendala.</p>
                        </div>
                    </div>

                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
        <Footer1/>
    </div>
</template>

<script>
import Navbar2 from '../components/Navbar2.vue'
import SlideEvent from '../components/SlideEvent.vue'
import Footer1 from '../components/Footer1.vue'

export default {
    name: 'Event',
    components: {
        Navbar2,
        SlideEvent,
        Footer1
    }
}
</script>
