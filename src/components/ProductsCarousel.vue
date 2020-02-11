<template>
   <section :title="category.name" >
      <div class="container">
         <h3 class="heading" v-text="category.name"></h3>
      </div>
      <div class="container">
         <Slick
            :options='{ autoPlay: true, centerMode: true, slidesToShow: 3, slidesToScroll: 3 }'
            :responsive='[{ breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }}]'
            >
               <ProductFigure class="mr-4" v-for="(product, pk) in products" :product="product" :key="pk" />
         </Slick>
      </div>
   </section>
</template>

<script>
import ProductFigure from '@/components/ProductFigure'
import Slick from 'vue-slick'
import { http, } from '../functions'
import productsData from '@/store/data/products.json'

export default {
   props: {
      category: {
         type: [Object]
      },
   },
   components: {
      Slick,
      ProductFigure,
   },
   data() {
      return {
         products: productsData,
      }
   },
   methods: {
      getProducts: function () {
         http.get('/wc/v3/products?cat='+ this.category.id).then(({ data }) => {
            this.products = data
            // console.log({ data })
         })
      },
   },
   mounted() {
      this.getProducts()
   }
}
</script>
<style lang="scss" scoped>
.carousel {
   padding: 1rem;
}
section {
   .slick-slider {
      > figure {
         display: none !important;
      }
   }
}
</style>
