<template>
   <div>
      <Navbar />
      <main>
         <slot></slot>
      </main>
      <PageFooter />
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
