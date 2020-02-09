<template>
   <nav class="navbar" ref="navbarEl">
      <div class="container px-0">
         <button v-if="back" class="btn" @click.prevent="$router.go(-1)">
            <i class="fa fa-chevron-left"></i>
         </button>
         <a href="/" class="navicon">
            <picture class="embed_responsive embed_responsive-1by1">
               <img :src="logo" ref="logoEl" alt="Logo" class="embed_responsive-item" />
            </picture>
         </a>
         <div class="navbar_menu">
            <ul >
               <li>
                  <router-link to="/cart" class="btn btn-link">
                     <i class="fa fa-1x fa-shopping-cart"></i>
                  </router-link>
               </li>
               <li>
                  <router-link to="/login" class="btn btn-link">
                     <i class="fa fa-1x fa-user"></i>
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script>
export default {
   props: {
      back: {
         type: [Boolean],
         default: false
      },
      logo: {
         type: String,
         default: 'https://www.stpatil.com/wp-content/uploads/2019/12/500x500-png-logo.png'
      },
   },
   mounted() {


   }
}
</script>

<style scoped lang="scss">
nav {
   display: none;
   background: #fff;
   @media screen and (max-width: 700px) {
      display: block;
   }
   .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .navicon {
         display: block;
         width: 50px;
         img {
            max-width: 100%;
         }
      }
      .navbar_menu {
         ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
         }
      }
   }
}
</style>
