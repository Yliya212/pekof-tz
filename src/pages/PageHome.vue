<template>
  <img src="../images/ImageHome.svg" class="catalog-img"/>
  <div class="section">
		<div v-if="allProducts === null">
      <loader />
		</div>
    <div v-else class="catalog-container">
      <router-link v-for="product in allProducts" :key="product.id" :to="`/product/${product.id}`">
        <ProductCard :product="product" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard';
import { mapGetters } from 'vuex';
import Loader from '@/components/common/Loader';

export default {
  name: "PageHome",
  components: { ProductCard, Loader },
  computed: mapGetters(['allProducts']),
}
</script>

<style>




.catalog-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  max-width: 1400px;
  margin-left: 260px;
  align-items: center;
  gap: 40px;
  margin-bottom: 39px;
  margin-top: 112px;

}
.catalog-img {
  width: 100%;
}
</style>