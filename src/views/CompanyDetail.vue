<template>
  <div v-if="loading">Cargando...</div>
  <div v-else-if="company">
    <section id="company-detail" class="detail-section pt-24 pb-20 px-4 bg-white min-h-screen">
      <div class="container mx-auto">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-gray-800">{{ company.nombre }}</h2>
          <button @click="$router.back()" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <i class="fas fa-arrow-left mr-2"></i> Regresar
          </button>
        </div>


          <div class="bg-white rounded-lg shadow-md p-8 mb-10 border border-gray-200">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="md:col-span-2">
                <h3 class="text-xl font-semibold mb-4 text-gray-800">Descripción</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">{{ company.descripcion }}</p>

                <h3 class="text-xl font-semibold mb-4 text-gray-800">Periodo de Trabajo</h3>
                <p class="text-gray-600 mb-6">{{ company.periodo }}</p>

                <h3 class="text-xl font-semibold mb-4 text-gray-800">Tecnologías Utilizadas</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in company.lenguajes" :key="tech"
                    class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{{ tech }}</span>
                </div>
              </div>

              <div>
                <div class="bg-gray-100 p-6 rounded-lg">
                  <h3 class="text-xl font-semibold mb-4 text-gray-800">Información</h3>
                  <ul class="space-y-3">
                    <li class="flex items-center">
                      <i class="fas fa-map-marker-alt w-8 text-blue-600"></i>
                      <span class="text-gray-700">{{ company.puesto }}</span>
                    </li>
                    <li class="flex items-center">
                      <i class="fas fa-user-tie w-8 text-blue-600"></i>
                      <span class="text-gray-700">{{ company.puesto }}</span>
                    </li>
                    <li class="flex items-center">
                      <i class="fas fa-project-diagram w-8 text-blue-600"></i>
                      <span class="text-gray-700">{{ company.link }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 class="text-2xl font-semibold mb-6 text-gray-800">Capturas del proyecto</h3>

          <company-carousel-images :companyImg="companyImg" />
        
      </div>
    </section>
  </div>
  <div v-else>
    <p class="text-red-600">No se encontró la empresa.</p>
  </div>
</template>

<script>

import CompanyCarouselImages from '../views/CompanyCarouseImages.vue';

export default {

  name: 'CompanyDetail',
  components: {
    CompanyCarouselImages
  },
  props: {
    imageUrlBase: {
      type: String,
      default: 'https://portfolio-node-api-av7i.onrender.com'
    }
  },
  data() {
    return {
      company: null,
      loading: true,
      companyImg: []
    }
  },
  async created() {
    const id = this.$route.params.id;
    try {
      const res = await fetch(`https://portfolio-node-api-av7i.onrender.com/empresa/${id}`);
      const data = await res.json();
      this.company = Array.isArray(data) ? data[0] : data;

      this.companyImg = this.company.img || [];
    
    } catch (e) {
      this.company = null;
    } finally {
      this.loading = false;
    }
  }
}
</script>
<style scoped>
.detail-section {
  /* Add any specific styles for the detail section here */
}
</style>