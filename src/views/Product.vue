<template>
  <div class="product">
    <!-- START HERO -->
    <div class="row justify-content-center">
        <div class="col-7 offset-1 mt-5-5">
            <div class="row">
                <img class="ml-3 mb-3 wow fadeInLeft" :src="require('@/assets/images/produk/produk-1.png')" alt="">
                <img class="ml-3 mb-3 wow fadeInDown" data-wow-delay="300ms" :src="require('@/assets/images/produk/produk-2.png')"
                    alt="">
            </div>
            <div class="row">
                <img class="ml-3 mb-3 wow fadeInLeft" data-wow-delay="600ms" :src="require('@/assets/images/produk/produk-3.png')"
                    alt="">
                <img class="ml-3 mb-3 wow fadeInUp" data-wow-delay="900ms" :src="require('@/assets/images/produk/produk-4.png')"
                    alt="">
            </div>
        </div>
        <div class="col-4">
            <div class="position-absolute mt-des w-75">
                <h1 class="wow fadeInRight" data-wow-delay="1200ms">Produk Kami</h1>
                <h5 class="wow fadeInRight" data-wow-delay="1400ms">Produk yang kami sediakan</h5>
                <p class="wow fadeInRight" data-wow-delay="1700ms">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Morbi luctus purus et augue scelerisque
                    tempus.
                </p>
            </div>
            <div class="position-relative bg-teks mt-5">
                <img :src="require('@/assets/images/produk/bg-teks.png')" alt="">
            </div>      
        </div>
    </div>
    <!-- END HERO -->

    <!-- START LAYANAN KAMI -->
    <div class="container ">
        <h1 class="font-weight-bold wow fadeInDown">Layanan Kami :</h1>
    
    <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-4">
            <div class="card py-1 px-2 mb-lg-0 wow zoomIn" data-wow-delay="300ms">
                <div class="card-body">
                    <div class="row align-items-center justify-content-center">
                        <img class="" :src="require('@/assets/images/produk/strategi-marketing-penjualan-icon.png')" alt="">
                        <h5 class="ml-2 font-weight-bold">Strategi Marketing <br> Pejualan</h5>
                    </div>
                    <hr>
                    <p class="text-left mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4">
            <div class="card py-1 px-2 mb-lg-0 wow zoomIn" data-wow-delay="500ms">
                <div class="card-body">
                    <div class="row align-items-center justify-content-center">
                        <img class="" :src="require('@/assets/images/produk/support.png')" alt="">
                        <h5 class="ml-2 font-weight-bold">Support System <br> dari Para Leader</h5>
                    </div>
                    <hr>
                    <p class="text-left mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4">
            <div class="card py-1 px-2 mb-lg-0 wow zoomIn" data-wow-delay="700ms">
                <div class="card-body">
                    <div class="row align-items-center justify-content-center">
                        <img class="" :src="require('@/assets/images/produk/promotion.png')" alt="">
                        <h5 class="ml-2 font-weight-bold">Mempromosikan <br> Bisnis Anda</h5>
                    </div>
                    <hr>
                    <p class="text-left mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- END LAYANAN KAMI -->

    <!-- Background -->
    <div class="position-relative z bgt">
        <img :src="require('@/assets/images/beranda/bg-section-2-3.png')" alt="">
    </div>

    <!-- START PRODUK LEBAHMADU CO. -->
    <div class="t1 container">
        <h1 class="font-weight-normal wow fadeInDown" data-wow-delay="300ms">PRODUK LEBAHMADU CO.</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-4 mt-5-5 wow fadeInLeft" data-wow-delay="300ms">
                <h4 class="font-weight-bold">HONEYBEE MADU PROPOLEEN <br> MADU ALAM</h4>
                <h3>RP. 300.000</h3>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                <img :src="require('@/assets/images/produk/produk-madu-1.png')" alt="">
            </div>
            <div class="col-lg-4 mt-ilus">
                <h5 class="ml-5 wow fadeInRight" data-wow-delay="600ms">PRODUK UTAMA</h5>
                <div class="row justify-content-center">
                    <div class="ml-4 wow fadeInUp" data-wow-delay="900ms">
                        <img class="produk-utama wow fadeInUp" data-wow-delay="900ms"
                            :src="require('@/assets/images/produk/produk-madu-2.png')" alt="">
                        <p class="mt-3">MADU ALAMI</p>
                        <p class="font-weight-bold">RP. 250.000</p>
                    </div>
                    <div class="ml-5 wow fadeInUp" data-wow-delay="1200ms">
                        <img class="produk-utama" :src="require('@/assets/images/produk/produk-madu-3.png')" alt="">
                        <p class="mt-3">MADU BEEPOLEN</p>
                        <p class="font-weight-bold">RP. 160.000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END PRODUK LEBAHMADU CO. -->

    <!-- Background -->
    <div class="position-relative z bg-pro">
        <img :src="require('@/assets/images/produk/bg-pro.png')" alt="">
    </div>

    <!-- START KEUNTUNGAN -->
    <!-- <section class="section-3-4"> -->
        <div class="t1 text-center wow fadeInDown" data-wow-delay="200ms">
            <h1 class="font-weight-normal mt-5-5">KEUNTUNGAN BERGABUNG DENGAN KAMI</h1>
        </div>
        <div class="container">
            <div class="text-center row mt-5">
                <div class="col-3 wow fadeIn" data-wow-delay="500ms">
                    <img :src="require('@/assets/images/produk/target-poin.png')" alt="">
                    <p class="mt-3">Target Poin <br> yang Jelas</p>
                </div>
                <div class="col-3 wow fadeIn" data-wow-delay="800ms">
                    <img :src="require('@/assets/images/produk/bantuan-dari-leader.png')" alt="">
                    <p class="mt-3">Bantuan dari <br> Leader</p>
                </div>
                <div class="col-3 wow fadeIn" data-wow-delay="1200ms">
                    <img :src="require('@/assets/images/produk/tim-yang-solid.png')" alt="">
                    <p class="mt-4">Tim yang Solid</p>
                </div>
                <div class="col-3 wow fadeIn" data-wow-delay="1500ms">
                    <img :src="require('@/assets/images/produk/stok-produk.png')" alt="">
                    <p class="mt-3">Stok Produk <br> yang Merata</p>
                </div>
            </div>
            <div class="text-center row mt-5">
                <div class="col-4 wow fadeIn" data-wow-delay="1800ms">
                    <img :src="require('@/assets/images/produk/online-support.png')" alt="">
                    <p class="mt-3">Online Support <br> 24 / 7</p>
                </div>
                <div class="col-4 wow fadeIn" data-wow-delay="2100ms">
                    <img :src="require('@/assets/images/produk/kenaikan-level.png')" alt="">
                    <p class="mt-3">Kenaikan Level <br> Menjanjikan</p>
                </div>
                <div class="col-4 wow fadeIn" data-wow-delay="2300ms">
                    <img :src="require('@/assets/images/produk/rancangan-bisnis.png')" alt="">
                    <p class="mt-4">Rancangan <br> Bisnis</p>
                </div>
            </div>
        </div>
    <!-- </section> -->
    <!-- END KEUNTUNGAN -->
        <Bergabung/>
        <Footer2/>
  </div>
</template>

<script>
import Bergabung from '../components/Bergabung.vue'
import Footer2 from '../components/Footer2.vue'

export default {
  name: 'Product',
  components: {
    Bergabung,
    Footer2
  }
}
</script>