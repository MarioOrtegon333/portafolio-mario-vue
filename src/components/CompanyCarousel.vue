<template>
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
    <SwiperSlide v-for="company in companies" :key="company.orden">
      <div class="company-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div class="h-48 bg-gray-100 flex items-center justify-center">
          <img :src="imageUrlBase + company.logo" :alt="`Logo de ${company.nombre}`" class="h-24 object-contain">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ company.nombre }}</h3>
          <p class="text-gray-600 mb-4">{{ company.descripcion }}</p>
          <button class="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium inline-block" @click="viewCompany(company.orden)">Ver más</button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: 'CompanyCarousel',
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
    }
  },
  methods: {
    viewCompany(companyId) {
      // Navigate to the company detail page
      this.$router.push({ name: 'CompanyDetail', params: { id: companyId } });
    }
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