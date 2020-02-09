<template>
   <Page :has-navbar="true">
      <Appbar />
      <ServicesGrid />
      <Carousels class="carousel container" />
   </Page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import ServicesGrid from '@/components/ServicesGrid.vue'
import Carousels from '@/components/Carousels'
import Appbar from '@/components/Appbar'

export default {
   components: {
      Carousels,
      Appbar,
      Page,
      ServicesGrid,
   },
   computed: {
      slides() {
         return [
            {
               title: '',
               src: '//placehold.it/600x100',
            }
         ]
      }
   }
}
</script>
<style lang="scss" scoped>
.carousel {
   padding: 1rem;
}
</style>
