<template>



  <app-header />
<div class="test1">
  <router-view />
</div>


  <app-footer />

</template>

<script>

import { mapActions } from 'vuex';
import AppHeader from '@/components/Header';
import AppFooter from '@/components/Footer';

export default {
  components: { AppHeader, AppFooter },
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


.test1 {
  min-height: calc(100vh - 75px) ;
}
</style>