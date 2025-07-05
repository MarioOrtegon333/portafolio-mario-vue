<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
      body {
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
      }
      
      .hero-section {
        background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
      }
      
      .swiper {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 50px;
      }
      
      .company-card {
        transition: transform 0.3s ease;
      }
      
      .company-card:hover {
        transform: translateY(-5px);
      }
      
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
      
      /* Animaciones */
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .fade-in {
        animation: fadeIn 0.8s ease forwards;
      }
      
      .detail-section {
        animation: fadeIn 0.5s ease forwards;
      }
      
      .btn-primary {
        transition: all 0.3s ease;
      }
      
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      
      .section-title {
        position: relative;
        display: inline-block;
      }
      
      .section-title::after {
        content: '';
        position: absolute;
        width: 60%;
        height: 3px;
        bottom: -10px;
        left: 0;
        background-color: #3182ce;
      }
    </style>