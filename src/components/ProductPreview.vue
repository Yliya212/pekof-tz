<template>
	<div class="product-container">
    <div class="btn" @click.prevent="addToFavorites(product)">
<div class="test">
      <svg v-if="isFavoritePage" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.41406" y="0.000244141" width="24" height="2" rx="1" transform="rotate(45 1.41406 0.000244141)" fill="#0A1E32"/>
        <rect x="18.7988" y="1.41431" width="24" height="2" rx="1" transform="rotate(135 18.7988 1.41431)" fill="#0A1E32"/>
      </svg>

      <svg v-else width="24" height="22" viewBox="0 0 24 22" :fill="isFavorite(product) ? '#0A1E32' : 'none'" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1352 3.77888C11.3142 4.087 11.6436 4.27662 11.9999 4.27663C12.3562 4.27664 12.6856 4.08704 12.8646 3.77893C13.8444 2.09221 15.5731 1 17.5188 1C20.4934 1 23 3.56876 23 6.8583C23 8.638 22.2555 10.2177 21.097 11.2871C21.0802 11.3026 21.0641 11.3186 21.0484 11.3351L11.9999 20.9107L2.95143 11.3351C2.9358 11.3186 2.91962 11.3026 2.9029 11.2871C1.74441 10.2177 1 8.63803 1 6.8583C1 3.56859 3.5059 1 6.48038 1C8.42623 1 10.1556 2.09235 11.1352 3.77888Z" stroke="#0A1E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
</div>

    </div>
    <div class="img-content">
      <img :src="product.image" alt="" class="item-image">
    </div>
    <p class="product-text">{{ product.title }}</p>
    <h2 class="product-price">${{ product.price }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    isFavoritePage: {
      type: Boolean,
      default: false,
    },
  },
  computed: mapGetters({
    isFavorite: 'getFavorites',
  }),
  methods: {
    addToFavorites(product) {
      this.$store.dispatch('addToFavorites', product);
    },
  }
}
</script>

<style scoped>

.product-container {

  cursor: pointer;
  display: block;
  position: relative;
}
.product-container:hover {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(154, 153, 153, 0);
  opacity: 0.6;
  transition: all 0.5s ease-out;
}
.test {
  margin-left: 300px;
}

.product-text {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 16px;
}
.product-price {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 10px;
}



.item-image {
  width: 320px;
  height: 336px;
}

</style>