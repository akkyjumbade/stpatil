<template>
   <div>
      <Navbar v-if="hasNavbar" />
      <Navbar v-if="hasBottomNav" />
      <main>
         <slot></slot>
      </main>
      <PageFooter v-if="hasFooter" />
   </div>
</template>

<script>
import Navbar from './Navbar'
import PageFooter from './PageFooter'

export default {
   components: {
      PageFooter,
      Navbar,
   },
   props: {
      hasNavbar: {
         type: Boolean,
         default: false
      },
      hasFooter: {
         type: Boolean,
         default: false
      },
      hasBottomNav: {
         type: Boolean,
         default: false
      },
      title: {
         type: String,
         default: ''
      },
   },
   mounted() {
      document.title = this.title
   }
};
</script>

<style>
</style>
