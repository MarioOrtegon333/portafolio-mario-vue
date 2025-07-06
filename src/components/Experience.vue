<template>
  <section id="experience" class="py-20 px-4 bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-gray-800 section-title">Mi Experiencia</h2>

      <p class="text-gray-600 mb-10">He colaborado con diversas empresas líderes en su ramo, contribuyendo
        al desarrollo de soluciones innovadoras y escalables.</p>

      <div v-if="loading">
        <div class="flex items-center justify-center min-h-screen">
          <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-600"></div>
        </div>
      </div>
      <div v-else-if="companies.length == 0" class="text-center text-gray-600">
        <p>No se encontraron empresas.</p>
      </div>
      <div v-else >
        <company-carousel :companies="companies" />
      </div>
      
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
      ,loading: true
    };
  },
  async created() {
    try {
      const res = await fetch(`https://portfolio-node-api-av7i.onrender.com/empresaList`);
      const dataRes = await res.json();
      if (dataRes.length === 0) {
        throw new Error('No companies found');
      }
      const data = [...dataRes].reverse();
      console.log(data);
      // Assuming the API returns an array of companies
      this.companies = data;
    } catch (e) {
      this.companies = [];
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
/* Add any specific styles for the Experience view here */
</style>