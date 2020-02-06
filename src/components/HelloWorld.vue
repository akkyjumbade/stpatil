<template>
  <div class="hello">
    <Navbar logo="https://www.stpatil.com/wp-content/uploads/2019/12/500x500-png-logo.png" menus="" />
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
   components: {
      Navbar
   },
   name: 'HelloWorld',
   props: {
      msg: String
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
