<template>
  <div v-if="loading">
    <div class="flex items-center justify-center min-h-screen">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-600"></div>
    </div>
  </div>
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

                <h3 class="text-xl font-semibold mb-4 text-gray-800">Proyecto</h3>
                <p class="text-gray-600 mb-6">{{ company.proyecto }}</p>

                <h3 class="text-xl font-semibold mb-4 text-gray-800">Actividades que realice</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">{{ company.labores }}</p>            

                <h3 class="text-xl font-semibold mb-4 text-gray-800">Tecnologías Utilizadas</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in company.lenguajes" :key="tech"
                    class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{{ tech }}</span>
                </div>
              </div>

              <div>
                <div class="bg-gray-100 p-6 rounded-lg">
                  <h3 class="text-xl font-semibold mb-4 text-gray-800">Información adicional</h3>
                  <ul class="space-y-3">
                      <li class="flex items-center">
                      <i class="fas fa-user-tie w-8 text-blue-600"></i>
                      <span class="text-gray-700">{{ company.puesto }}</span>
                    </li>
                    <li class="flex items-center">
                      <i class="fas fa-clock w-8 text-blue-600"></i>
                      <span class="text-gray-700">{{ company.periodo }}</span>
                    </li>
                    <li class="flex items-center">
                      <i class="fas fa-project-diagram w-8 text-blue-600"></i>
                      <a :href="company.link" class="nav-link text-gray-700 hover:text-blue-600" target="_blank" rel="noopenes noreferrer">Ir al proyecto</a>                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
      this.$nextTick(() => {
        const section = document.getElementById('company-detail');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
}
</script>
<style scoped>
.detail-section {
  /* Add any specific styles for the detail section here */
}
</style>