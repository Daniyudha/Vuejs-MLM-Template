<template>
    <div class="event">
            <!-- START SLIDER -->
            <div class="text-center">
                <h5 class="wow fadeInDown" data-wow-delay="200ms">Event</h5>
                <h1 class="text-kuning font-weight-bold wow fadeInDown" data-wow-delay="500ms">HONEYBEE</h1>
            </div>

            <!-- <div class="col-md-12">
                <div class="owl-carousel event-carousel">
                  <div class="item"><img class="ron" src="assets/images/event/seminar-besar.png" alt=""></div>
                    <div id="carrousel">
                        <div class="item"><img class="ron" src="assets/images/event/seminar-kota-tasik.png" alt=""></div>
                        <div class="item"><img class="ron" src="assets/images/event/seminar-besar.png" alt=""></div>
                        <div class="item"><img class="ron" src="assets/images/event/seminar-kota-tasik.png" alt=""></div>
                    <div class="container">
                        <div class="item"><img class="ron" src="assets/images/event/seminar-besar.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div> -->
        <!-- END SLIDER -->

        <!-- START EVENT GALLERY -->
    <section class="strategi py-3">
        <div class="text-center mt-5">
            <h3 class="text-kuning mb-4 wow fadeInDown" data-wow-delay="700ms">EVENT GALLERY</h3>
            <form class="form-search wow fadeInDown" data-wow-delay="900ms" method="get" action="#">
                <input type="search" name="search" placeholder="Nama / tgl event">
                <button type="submit" class="rounded"><span class="fa fa-search"></span></button>
            </form>
        </div>
        <div class="row justify-content-center mt-5 wow fadeIn" data-wow-delay="1300ms">
            <div class="card-berita body-berita col-5 img-fluid mx-3 my-3">
                <img class="card-img-top rounded" src="assets/images/event/seminar-besar.png" alt="Card image cap">
                <div class="">
                    <h6 class="mt-3 font-weight-bold">20 DESEMBER 2020</h6>
                    <h4 class="mt-3 mb-3">SEMINAR BESAR KOTA TEGAL</h4>
                    <a href="" class="text-muted" data-toggle="modal" data-target="#seminar">
                        <p>LIHAT DETAIL &xrarr;</p>
                    </a>
                </div>
            </div>
            <div class="card-berita body-berita col-5 img-fluid mx-3 my-3">
                <img class="card-img-top rounded" src="assets/images/event/seminar-kota-tasik.png" alt="Card image cap">
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
            <div class="card-berita body-berita col-5 img-fluid mx-3 my-3">
                <img class="card-img-top rounded" src="assets/images/event/seminar-kota-tasik.png" alt="Card image cap">
                <div class="">
                    <h6 class="mt-3 font-weight-bold">20 DESEMBER 2020</h6>
                    <h4 class="mt-3 mb-3">SEMINAR BESAR KOTA TEGAL</h4>
                    <a href="" class="text-muted" data-toggle="modal" data-target="#seminar">
                        <p>LIHAT DETAIL &xrarr;</p>
                    </a>
                </div>
            </div>
            <div class="card-berita body-berita col-5 img-fluid mx-3 my-3">
                <img class="card-img-top rounded" src="assets/images/event/seminar-besar.png" alt="Card image cap">
                <div class="">
                    <h6 class="mt-3 font-weight-bold">20 DESEMBER 2020</h6>
                    <h4 class="mt-3 mb-3">SEMINAR BESAR KOTA TEGAL</h4>
                    <a href="" class="text-muted" data-toggle="modal" data-target="#seminar">
                        <p>LIHAT DETAIL &xrarr;</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- END EVENT GALLERY -->
        <Footer1/>
    </div>
</template>

<script>
import Footer1 from '../components/Footer1.vue'

export default {
    name: 'Event',
    components: {
        Footer1
    }
}
</script>
