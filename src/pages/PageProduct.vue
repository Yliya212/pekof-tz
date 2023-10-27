<template>
  <div class="link">
    <router-link to="/">Главная</router-link> › {{ product.title }}
  </div>
  <div >
    <div v-if="product" class="product-container">
      <div >
        <img :src="product.image" alt="" class="product-img">
      </div>
      <div class="description">
        <h2 class="item-title">{{ product.title }}</h2>
        <p class="item-text">{{ product.description }}</p>
        <p class="item-price"> ${{ product.price }}</p>
        <button @click="addToFavorites" class="item-btn"><img src="../images/emptyHeart.svg" class="item-img"/>Избранное</button>
      </div>
    </div>
    <div v-else>404</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "PageProduct",
	computed: {
		...mapGetters(['allProducts']),
		product() {
			return this.allProducts && this.allProducts.find((item) => item.id === +this.$route.params.id);
		},
    favorite() {
      if(this.product === true) {
        return this.product
      }
    }
	},
  methods: {
    addToFavorites(favorite) {
      this.$store.dispatch('addToFavorites', favorite);
    }
  },
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
.product-container {
  display: flex;
  margin-top: 82px;
  margin-left: 260px;
}
.description {
  margin-left: 40px;
  max-width: 559px;
}
.item-title {
  font-size: 40px;

}
.item-text {
  margin-top: 24px;
  font-size: 16px;
}
.item-price {
  margin-top: 24px;
  font-size: 40px;
}

.product-img {
  width: 680px;
  height: 715px;
}

.item-btn {
  background: #ffffff;
  border: solid #0A1E32 1px;
  border-radius: 4px;
  width: 200px;
  height: 48px;
  padding: 10px;
  font-size: 20px;
  margin-top: 24px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}
.item-img {

}
</style>