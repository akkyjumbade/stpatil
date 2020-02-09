<template>
   <Page :has-navbar="true">
      <Appbar />
      <ServicesGrid />
      <Carousels class="carousel container" />
      <ProductsSection title="" />
      {{ resources }}
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

export default {
   components: {
      ProductsSection,
      Carousels,
      Appbar,
      Page,
      ServicesGrid,
   },
   computed:  mapState(['resources']),
   methods: {
      ...mapActions(['getResources'])
   },
   created() {
      this.getResources()
   }
}
</script>
<style lang="scss" scoped>
.carousel {
   padding: 1rem;
}
</style>
