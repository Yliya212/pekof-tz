<template>
  <div class="link">
    <router-link to="/">Главная</router-link> > Избранное
  </div>
  <div class="section">
    <div v-if="!allFavorites.length">
      <h1 class="text">Список избранного пуст</h1>
    </div>
    <div v-else class="catalog-container" >
      <router-link v-for="product in allFavorites" :key="product" :to="`/favorites`">
        <router-link :to="`/product/${product.id}`">
          <div class="favorite-product">
            <ProductCard :product="product" :is-favorite-page="true" />
          </div>

        </router-link>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard';

export default {
  name: "PageFavorites",
  components: { ProductCard },
  computed: mapGetters(['allFavorites']),

}
</script>

<style scoped>

.link {
  margin: 33px 0 0 250px;

  text-decoration: none;
}

.link:hover {
  cursor: pointer;
}

.text {
  margin-top: 300px;
  margin-left: 800px;
  /*margin-bottom: 372px;*/
}
.favorite-product {
  max-width: 330px;
}

</style>