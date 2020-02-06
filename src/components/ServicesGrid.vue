<template>
   <div class="bg-light py-3">
      <div class="container">
         <div class="services_grid">
            <div>
               <router-link class="btn btn-block" to="/services/mobile-recharge">
                  Mobile Recharge
               </router-link>
            </div>
            <div>
               <router-link class="btn btn-block" to="/services/electricity">
                  Electricity
               </router-link>
            </div>
            <div>
               <router-link class="btn btn-block" to="/services/mobile-recharge">
                  Mobile Recharge
               </router-link>
            </div>
            <div>
               <router-link class="btn btn-block" to="/services/electricity">
                  Electricity
               </router-link>
            </div>
            <div>
               <router-link class="btn btn-block" to="/services/mobile-recharge">
                  Mobile Recharge
               </router-link>
            </div>
            <div>
               <router-link class="btn btn-block" to="/services/electricity">
                  Electricity
               </router-link>
            </div>
            <div>
               <router-link class="btn btn-block" to="/services/mobile-recharge">
                  Mobile Recharge
               </router-link>
            </div>
            <div>
               <router-link class="btn btn-block" to="/services/electricity">
                  Electricity
               </router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   // components: {
   //    Page,
   //    HelloWorld
   // }
}
</script>
<style scoped>
.services_grid {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 1rem;
}
</style>
