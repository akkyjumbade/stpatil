<template>
   <Page :has-navbar="true">
      <Appbar />
      <ServicesGrid />
      <Carousels :options='{ autoPlay: true }' v-if="heroSlides" :slides="heroSlides" class="carousel container" />
      <ProductsSection v-for="(item, itemkey) in productCategories" :title="item.name" :category="item" :key="itemkey" />
      <!-- {{ productCategories }} -->
   </Page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import ServicesGrid from '@/components/ServicesGrid.vue'
import Carousels from '@/components/Carousels'
import ProductsSection from '@/components/ProductsSection'
import Appbar from '@/components/Appbar'
import { mapState, mapActions } from 'vuex'
import { http, } from '../functions'

export default {
   components: {
      ProductsSection,
      Carousels,
      Appbar,
      Page,
      ServicesGrid,
   },
   data() {
      return {
         slides: null,
         heroSlides: null,
         productCategories: null,
      }
   },
   computed:  mapState(['resources']),
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
