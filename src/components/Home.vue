<template>
  <div>
    <Hero />
    <About />
    <Skills />
    <SoftSkills />
    <Experience />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';
import SoftSkills from '@/components/SoftSkills.vue';
import Experience from '@/components/Experience.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Hero,
    About,
    Skills,
    SoftSkills,
    Experience    
  },
});
</script>

<style scoped>
/* Estilos específicos para la vista Home */
</style>