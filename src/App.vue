<template>
  <Header/>
  <div class="footer-height">
    <router-view/>
  </div>
  <Footer/>
</template>
<script>

import {mapActions} from 'vuex';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {Header, Footer},
  methods: mapActions(['fetchProducts']),
  async created() {
    await this.fetchProducts();
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  text-decoration: none;
  color: #0A1E32;
}
.footer-height {
  min-height: calc(100vh - 75px);
}
</style>