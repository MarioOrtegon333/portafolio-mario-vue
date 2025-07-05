<template>
  <section id="experience" class="py-20 px-4 bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-gray-800 section-title">Mi Experiencia</h2>
      
      <p class="text-gray-600 mb-10">He colaborado con diversas empresas líderes en el sector tecnológico, contribuyendo al desarrollo de soluciones innovadoras y escalables.</p>
      
      <!-- Companies Carousel -->
      <company-carousel :companies="companies" />
    </div>
  </section>
</template>

<script>
import CompanyCarousel from '../components/CompanyCarousel.vue';

export default {
  name: 'Experience',
  components: {
    CompanyCarousel
  },data() {
    return {
      companies: []
    };
  },
  async created() {
    try {
      const res = await fetch(`https://portfolio-node-api-av7i.onrender.com/empresaList`);
      const data = await res.json();
      console.log(data);
      // Assuming the API returns an array of companies
      this.companies = data;
    } catch (e) {
      this.companies = [];
    } finally {
    }
  }
}
</script>

<style scoped>
/* Add any specific styles for the Experience view here */
</style>