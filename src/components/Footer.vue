<template>
  <footer class="bg-gray-800 text-white py-12 px-4">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <h3 class="text-xl font-semibold mb-2">Mario Ortegón</h3>
          <p class="text-gray-300">Desarrollador de Software Fullstack</p>
        </div>
        
        <div class="flex space-x-4">
          <a href="https://www.linkedin.com/in/juanperez" target="_blank" class="text-gray-300 hover:text-white transition-colors">
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://github.com/juanperez" target="_blank" class="text-gray-300 hover:text-white transition-colors">
            <i class="fab fa-github text-2xl"></i>
          </a>
          <a href="https://twitter.com/juanperez" target="_blank" class="text-gray-300 hover:text-white transition-colors">
            <i class="fab fa-twitter text-2xl"></i>
          </a>
          <a href="mailto:contacto@juanperez.com" class="text-gray-300 hover:text-white transition-colors">
            <i class="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2025 Mario Ortegón. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Add any specific styles for the footer here */
</style>