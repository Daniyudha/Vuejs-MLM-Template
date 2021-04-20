<template>
    <div class="galeri">
        <Navbar2/>
        <!-- START KONTEN -->
    <section>
        <div class="text-center mb-5 mt-5">
            <h5 class="wow fadeInDown" data-wow-delay="200ms">Galeri</h5>
            <h1 class="text-kuning font-weight-bold wow fadeInDown" data-wow-delay="500ms">HONEYBEE</h1>
        </div>
        <div class="container wow fadeIn" data-wow-delay="1000ms">
            <div class="text-center">
                <img class="mklbItem mb-4" :src="require('@/assets/images/galeri/bg-video.png')" data-youtube-id="feoRIr5MNHM" />
                <!-- <a href=""><img class="mb-4" src="assets/images/galeri/bg-video.png" alt=""></a> -->
            </div>
            <div class="row justify-content-center ml-3 mr-3">
                <div class="col-5 mb-4">
                    <img class="mklbItem ron" :src="require('@/assets/images/galeri/image-1.png')"
                        :data-src="require('@/assets/images/galeri/image-1.png')" data-gallery="gallery1" />
                    <!-- <img class="ron" src="assets/images/galeri/image-1.png" alt=""> -->
                    <h5 class="text-white des-galeri">PRODUCT NAME</h5>
                </div>
                <div class="col-5 mb-4">
                    <img class="mklbItem ron" :src="require('@/assets/images/galeri/image-2.png')"
                        :data-src="require('@/assets/images/galeri/image-2.png')" data-gallery="gallery1" />
                    <h5 class="text-white des-galeri">PRODUCT NAME</h5>
                </div>
            </div>
            <div class="row justify-content-center ml-3 mr-3">
                <div class="col-5 mb-4">
                    <img class="mklbItem ron" :src="require('@/assets/images/galeri/image-3.png')"
                        :data-src="require('@/assets/images/galeri/image-3.png')" data-gallery="gallery1" />
                    <h5 class="text-white des-galeri">PRODUCT NAME</h5>
                </div>
                <div class="col-5 mb-4">
                    <img class="mklbItem ron" :src="require('@/assets/images/galeri/image-4.png')"
                        :data-src="require('@/assets/images/galeri/image-4.png')" data-gallery="gallery1" />
                    <h5 class="text-white des-galeri">PRODUCT NAME</h5>
                </div>
            </div>
        </div>
    </section>
    <!-- END KONTEN -->
        <Footer1/>
    </div>
</template>

<script>
import Navbar2 from '../components/Navbar2.vue'
import Footer1 from '../components/Footer1.vue'

export default {
    name: 'Galeri',
    components: {
        Navbar2,
        Footer1
    }
}
</script>