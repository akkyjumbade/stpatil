<template>
   <Page :has-navbar="true">
      <Appbar />
      <ServicesGrid />
      <Carousels :options='{ autoPlay: true }' v-if="heroSlides" :slides="heroSlides" class="carousel container" />
      <ProductsCarousel v-for="(item, itemkey) in productCategories" :key="itemkey" :category="item" />
   </Page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import ProductsCarousel from '@/components/ProductsCarousel'
import ServicesGrid from '@/components/ServicesGrid.vue'
import Carousels from '@/components/Carousels'
import Appbar from '@/components/Appbar'
import { mapState, mapActions } from 'vuex'
import { http, } from '../functions'
import productsData from '@/store/data/products.json'
import productCategoriesData from '@/store/data/product_categories.json'

export default {
   components: {
      ProductsCarousel,
      Carousels,
      Appbar,
      Page,
      ServicesGrid,
   },
   data() {
      return {
         slides: null,
         heroSlides: null,
         productCategories: productCategoriesData,
         products: productsData,
      }
   },
   computed: {
      ...mapState(['resources']),
      state() {
         return this.$store.state
      }
   },
   methods: {
      ...mapActions(['getResources']),
      async getCollection() {
         const { data } = await http.get('/app/resources')
         if(data.hero_carousel) {
            this.heroSlides = data.hero_carousel.map(i => ({
               title: i.title,
               src: i.thumbnail_url,
            }))
         }
         this.slides = data
      },
      getCategories() {
         http.get('/wc/v2/products/categories').then(({ data }) => {
            this.productCategories = data
            // console.log({ data })
         })
      }
   },
   async created() {
      this.getResources()
      this.getCollection()
      this.getCategories()
   }
}
</script>
<style lang="scss" scoped>
.carousel {
   padding: 1rem;
}
</style>
