<template>
  <section class="py-20 px-4 bg-gray-50">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-gray-800 section-title">Habilidades Blandas</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200 fade-in" style="animation-delay: 0.2s;">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-comments text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Comunicación</h4>
          </div>
          <p class="text-gray-600">Capacidad para transmitir ideas de forma clara y efectiva tanto con equipos técnicos como con clientes.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200 fade-in" style="animation-delay: 0.3s;">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-users text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Trabajo en equipo</h4>
          </div>
          <p class="text-gray-600">Habilidad para colaborar eficazmente, compartir conocimientos y contribuir al éxito colectivo del equipo.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200 fade-in" style="animation-delay: 0.4s;">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-puzzle-piece text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Resolución de problemas</h4>
          </div>
          <p class="text-gray-600">Capacidad analítica para identificar problemas, evaluar alternativas y encontrar soluciones eficientes.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200 fade-in" style="animation-delay: 0.5s;">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-clock text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Gestión del tiempo</h4>
          </div>
          <p class="text-gray-600">Excelente capacidad para organizar tareas, priorizar y cumplir con plazos establecidos.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200 fade-in" style="animation-delay: 0.6s;">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-lightbulb text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Creatividad e innovación</h4>
          </div>
          <p class="text-gray-600">Capacidad para proponer ideas originales y soluciones innovadoras a desafíos tecnológicos.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200 fade-in" style="animation-delay: 0.7s;">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-book text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Aprendizaje continuo</h4>
          </div>
          <p class="text-gray-600">Actitud proactiva hacia el aprendizaje y adaptación rápida a nuevas tecnologías y metodologías.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SoftSkills',
};
</script>

<style scoped>
.skill-card {
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>