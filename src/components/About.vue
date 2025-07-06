<template>
  <section id="about" class="py-20 px-4 bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-gray-800 section-title">Acerca de mí</h2>
      <div class="grid md:grid-cols-2 gap-10">
        <div class="fade-in" style="animation-delay: 0.2s;">
          <p class="text-gray-600 leading-relaxed mb-6">
            Soy un desarrollador de software con más de 3 años de experiencia en el desarrollo de aplicaciones web y móviles. Me especializo en tecnologías frontend y backend, con un enfoque en la creación de soluciones escalables y de alta calidad.
          </p>
          <p class="text-gray-600 leading-relaxed mb-6">
            Mi pasión por la tecnología comenzó desde temprana edad, lo que me llevó a estudiar la Lic. en tecnologías de la Información. Desde entonces, he trabajado en diversos proyectos para empresas de diferentes sectores, siempre buscando aplicar las mejores prácticas y mantenerme actualizado con las últimas tendencias tecnológicas.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Me caracterizo por ser un profesional autodidacta, orientado a resultados y con gran capacidad para trabajar en equipo. Disfruto enfrentando nuevos retos y aportando soluciones creativas a problemas complejos.
          </p>
        </div>
        <div class="fade-in" style="animation-delay: 0.4s;">
          <div class="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Información Personal</h3>
            <ul class="space-y-3">
               <li class="flex items-center">
                <i class="fas fa-user-alt w-8 text-blue-600"></i>
                <span class="text-gray-700">Mario Josué Ortegón Chan</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-map-marker-alt w-8 text-blue-600"></i>
                <span class="text-gray-700">Mérida, Yucatán, México</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-graduation-cap w-8 text-blue-600"></i>
                <span class="text-gray-700">Lic. en tecnologías de la Información</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-briefcase w-8 text-blue-600"></i>
                <span class="text-gray-700">3+ años de experiencia</span>
              </li>
               <li class="flex items-center">
                <i class="fas fa-phone-alt w-8 text-blue-600"></i>
                <span class="text-gray-700">+52 9991559240</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope w-8 text-blue-600"></i>
                <span class="text-gray-700">mortegon024@gmail.com</span>
              </li>            
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}
</style>