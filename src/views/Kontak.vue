<template>
  <div class="kontak">
    <!-- START CONTACT US -->
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-6 mt-5-5 wow fadeInLeft">
            <iframe
                :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.04720099987918!2d110.41665049368645!3d-7.81571538254853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57d6df0a3f85%3A0xa0787ca37eb6419!2sGenesis%20Svargaloka%20Creative%20Hub!5e0!3m2!1sen!2sid!4v1617768216280!5m2!1sen!2sid`"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="col-lg-5 offset-1 mt-5-5">
            <h6 class="wow fadeInRight" data-wow-delay="300ms">Kontak Kami</h6>
            <h1 class="text-kuning font-weight-bold wow fadeInRight" data-wow-delay="500ms">HONEYBEE</h1>
            <p class="wow fadeInRight" data-wow-delay="800ms">Kami akan terus mengabari anda tentang postingan terbaru, seluruh rangkaian kegiatan kami dan event besar
                lainnya. Kami juga melayani keluhan dan komplain 24 jam.</p>
            <p class="fa fa-map-marked-alt text-kuning ml-2 wow fadeInRight" data-wow-delay="1000ms"><b class="ml-3 text-dark">Yogyakarta</b></p> <br>
            <p class="fa fa-phone text-kuning ml-2 wow fadeInRight" data-wow-delay="1100ms"><b class="ml-3 text-dark">0813-6754-1987</b></p> <br>
            <p class="fa fa-envelope text-kuning ml-2 wow fadeInRight" data-wow-delay="1200ms"><b class="ml-3 text-dark">Loremipsum@gmail.com</b></p>
            <button class="btn-hubungi wow fadeInUp" data-wow-delay="1500ms">Hubungi Kami</button>
        </div>
    </div>
    </div>
    <!-- END CONTACT US -->
    <Footer1/>
  </div>
</template>

<script>
import Footer1 from '../components/Footer1.vue'

export default {
  name: 'Kontak',
  components: {
    Footer1
  }
}
</script>