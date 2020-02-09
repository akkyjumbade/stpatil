<template>
   <section class="ProductsSection">
      <h3>{{ category.name }}</h3>
      <div class="container">
         <ProductFigure v-for="(product, productkey) in products" :key="productkey" :product="product" />
      </div>
   </section>
</template>

<script>
import ProductFigure from '@/components/ProductFigure'

import { http, Toast } from '../functions'
export default {
   components: {
      ProductFigure,
   },
   props: {
      category: {

      },
   },
   data() {
      return {
         products: []
      }
   },
   async beforeCreate() {
      try {
         const { data } = await http.get('/')
         this.products = data
      } catch (error) {
         Toast.fire({
            icon: 'error',
            title: error.message
         })
      }
   }
}
</script>

<style>

</style>
