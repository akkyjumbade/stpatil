<template>
  <Page>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </Page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Page from '@/components/Page.vue'

export default {
   components: {
      Page,
      HelloWorld
   }
}
</script>
