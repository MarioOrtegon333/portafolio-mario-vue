<template>
  <header class="fixed w-full top-0 z-50 bg-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <div class="h-12 w-12 rounded-full overflow-hidden">
          <img src="@/assets/img/profile_image.png" alt="Foto de Perfil" class="h-full w-full object-cover">
        </div>
        <h1 class="text-xl font-bold text-gray-800">Mario Ortegón</h1>
      </div>
      
      <nav class="hidden md:flex">
        <ul class="flex space-x-8">
          <li><a href="#about" class="nav-link text-gray-700 hover:text-blue-600" @click.prevent="goToSection('about')">Acerca</a></li>
          <li><a href="#skills" class="nav-link text-gray-700 hover:text-blue-600" @click.prevent="goToSection('skills')">Habilidades</a></li>
          <li><a href="#experience" class="nav-link text-gray-700 hover:text-blue-600" @click.prevent="goToSection('experience')">Experiencia</a></li>
        </ul>
      </nav>
      
      <button id="mobile-menu-button" class="md:hidden text-gray-700">
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </div>
    
    <div id="mobile-menu" class="hidden md:hidden bg-white w-full pb-4">
      <ul class="flex flex-col items-center space-y-4">
       <li><a href="#about" class="nav-link text-gray-700 hover:text-blue-600" @click.prevent="goToSection('about')">Acerca</a></li>
          <li><a href="#skills" class="nav-link text-gray-700 hover:text-blue-600" @click.prevent="goToSection('skills')">Habilidades</a></li>
          <li><a href="#experience" class="nav-link text-gray-700 hover:text-blue-600" @click.prevent="goToSection('experience')">Experiencia</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleMobileMenu() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    },
    goToSection(sectionId) {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  mounted() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    mobileMenuButton.addEventListener('click', this.toggleMobileMenu);
  }
}
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #3182ce;
  transition: width 0.3s;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
</style>