<template>
  <section id="infoimg" class="py-20 px-4 container mx-auto">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">Capturas del Proyecto</h2>
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :loop="false"
      :pagination="{ clickable: true }"
      :navigation="true"
      :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 }
      }"
      class="companies-swiper"
    >
      <SwiperSlide v-for="company in companyImg">
        <div class="company-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div class="h-48 bg-gray-100 flex items-center justify-center">
            <img :src="imageUrlBase + company" class="h-48 object-contain">
          </div>    
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: 'CompanyCarouselImages',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    companies: {
      type: Array,
      required: true
    },
    imageUrlBase: {
      type: String,
      default: 'https://portfolio-node-api-av7i.onrender.com'
    },
    companyImg: {
      type: Array,
      required: true
    }
  },
  methods: {
  },
    setup() {
    return {
      modules: [Navigation, Pagination]
    }
  }
};
</script>

<style scoped>
.company-card {
  transition: transform 0.3s ease;
}

.company-card:hover {
  transform: translateY(-5px);
}
</style>