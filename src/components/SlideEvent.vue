<template>
  <div id="app">
  <div class="container">
    <carousel class="event-carousel" :responsive="{0:{items:1,nav:false},600:{items:2.4,nav:false}}" 
    :center="true" :loop="true" :dots="false">
        <div class="item"><img class="ron" :src="require('@/assets/images/event/seminar-kota-tasik.png')" alt=""></div>
        <div class="item"><img class="ron" :src="require('@/assets/images/event/seminar-besar.png')" alt=""></div>
        <div class="item"><img class="ron" :src="require('@/assets/images/event/seminar-kota-tasik.png')" alt=""></div>
        <div class="item"><img class="ron" :src="require('@/assets/images/event/seminar-besar.png')" alt=""></div>
    </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "SlideEvent",
  components: { carousel },
  data() {
      return {
        
      }
    },
};
</script>

