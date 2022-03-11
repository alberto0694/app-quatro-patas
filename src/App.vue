<template>
  <div>  
    <div>
    
      <Header/>

      <router-view></router-view>

      <Footer/>      
    
    </div>
      
         
  </div>
</template>

<style lang="scss">
  @import "./scss/custom.scss";
</style>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
      Header,
      Footer
    }
}
</script>