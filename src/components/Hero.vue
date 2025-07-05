<template>
  <section class="hero-section pt-28 pb-20 px-4 bg-gradient-to-r from-gray-800 to-gray-900">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-8 md:mb-0 fade-in" style="animation-delay: 0.2s;">
        <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" alt="Desarrollador" class="rounded-lg shadow-2xl">
      </div>
      <div class="md:w-1/2 md:pl-12 fade-in" style="animation-delay: 0.4s;">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Desarrollador de Software Fullstack</h1>
        <p class="text-gray-300 text-lg mb-8">Transformando ideas en soluciones tecnológicas innovadoras</p>
        <a href="#about" class="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium inline-block">Conoce más</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
}
</style>