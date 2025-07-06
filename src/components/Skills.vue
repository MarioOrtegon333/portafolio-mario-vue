<template>
  <section id="skills" class="py-20 px-4 bg-gray-50">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-gray-800 section-title">Mis Habilidades</h2>
      
    
      
      <!-- Technical Skills -->
      <h3 class="text-2xl font-semibold mb-8 text-gray-700">Lenguajes y Tecnologías</h3>
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 mb-16">
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-html5 text-3xl text-orange-500"></i>
          </div>
          <span class="text-sm text-gray-700">HTML5</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-css3-alt text-3xl text-blue-500"></i>
          </div>
          <span class="text-sm text-gray-700">CSS3</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-js text-3xl text-yellow-500"></i>
          </div>
          <span class="text-sm text-gray-700">JavaScript</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-react text-3xl text-blue-400"></i>
          </div>
          <span class="text-sm text-gray-700">React</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-node-js text-3xl text-green-600"></i>
          </div>
          <span class="text-sm text-gray-700">Node.js</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-python text-3xl text-blue-800"></i>
          </div>
          <span class="text-sm text-gray-700">Python</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-angular text-3xl text-red-600"></i>
          </div>
          <span class="text-sm text-gray-700">Angular</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-vuejs text-3xl text-green-500"></i>
          </div>
          <span class="text-sm text-gray-700">Vue.js</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-php text-3xl text-purple-600"></i>
          </div>
          <span class="text-sm text-gray-700">PHP</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-java text-3xl text-red-500"></i>
          </div>
          <span class="text-sm text-gray-700">Java</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-aws text-3xl text-orange-400"></i>
          </div>
          <span class="text-sm text-gray-700">AWS</span>
        </div>
        
        <div class="tech-icon flex flex-col items-center">
          <div class="bg-white p-4 rounded-full shadow-sm mb-2 w-16 h-16 flex items-center justify-center">
            <i class="fab fa-docker text-3xl text-blue-600"></i>
          </div>
          <span class="text-sm text-gray-700">Docker</span>
        </div>
      </div>

        <!-- Soft Skills -->
      <h3 class="text-2xl font-semibold mb-8 text-gray-700">Habilidades Blandas</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-comments text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Comunicación</h4>
          </div>
          <p class="text-gray-600">Capacidad para transmitir ideas de forma clara y efectiva tanto con equipos técnicos como con clientes.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-users text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Trabajo en equipo</h4>
          </div>
          <p class="text-gray-600">Habilidad para colaborar eficazmente, compartir conocimientos y contribuir al éxito colectivo del equipo.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-puzzle-piece text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Resolución de problemas</h4>
          </div>
          <p class="text-gray-600">Capacidad analítica para identificar problemas, evaluar alternativas y encontrar soluciones eficientes.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-clock text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Gestión del tiempo</h4>
          </div>
          <p class="text-gray-600">Excelente capacidad para organizar tareas, priorizar y cumplir con plazos establecidos.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <i class="fas fa-lightbulb text-blue-600 text-xl"></i>
            </div>
            <h4 class="text-xl font-medium text-gray-800">Creatividad e innovación</h4>
          </div>
          <p class="text-gray-600">Capacidad para proponer ideas originales y soluciones innovadoras a desafíos tecnológicos.</p>
        </div>
        
        <div class="skill-card bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
  name: 'Skills',
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

.tech-icon {
  transition: all 0.2s ease;
}

.tech-icon:hover {
  transform: scale(1.2);
}
</style>