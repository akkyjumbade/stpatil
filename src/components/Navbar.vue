<template>
   <nav class="navbar" ref="navbarEl">
      <div class="container px-0">
         <a href="/" class="navicon">
            <picture class="embed-responsive embed-responsive-16by9">
               <img :src="logo" ref="logoEl" alt="Logo" class="embed-responsive-item" />
            </picture>
         </a>
         <div class="navbar_menu">
            <ul >
               <li>
                  <router-link to="/login">
                     <span>ST Patil Store</span>
                  </router-link>
               </li>
               <li>
                  <router-link to="/login">
                     <span>Offers &amp; Deals</span>
                  </router-link>
               </li>
               <li>
                  <router-link to="/login">
                     <span>Refer &amp; Earn</span>
                  </router-link>
               </li>
               <li>
                  <router-link to="/about">
                     <span>About</span>
                  </router-link>
               </li>
               <li>
                  <router-link to="/contact">
                     <span>Contact</span>
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="navbar_menu">
            <ul >
               <li>
                  <router-link to="/login" class="btn btn-primary">
                     <i class="fa fa-user text-white"></i>
                     <span class="text-white">LOGIN or REGISTER</span>
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
      logo: {
         type: String,
         default: 'https://www.stpatil.com/wp-content/uploads/2019/12/500x500-png-logo.png'
      }
   },
   mounted() {
      const navbarEl = this.$refs.navbarEl
      // const logoEl = this.$refs.logoEl
      var img = new Image();
      img.onload = function () {
         document.body.style = `--navbar-height: ${navbarEl.clientHeight}px`
         // console.log(navbarEl.clientHeight, logoEl)
      }
      img.src = this.logo;

   }
}
</script>

<style scoped lang="scss" src="@/styles/navbar.scss"></style>
