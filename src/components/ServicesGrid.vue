<template>
   <div class="service_section">
      <div class="container">
         <div class="services_grid">
            <div>
               <router-link class="icon_btn" to="/service/mobile_recharge">
                  <img src="@/assets/services/stp-service-mobile-recharge.png" />
                  <span class="btn_label">Mobile Recharge</span>
               </router-link>
            </div>
            <div>
               <router-link class="icon_btn" to="/service/dth">
                  <img src="@/assets/services/stp-service-dth.png" />
                  <span class="btn_label">DTH Payment</span>
               </router-link>
            </div>
            <div>
               <router-link class="icon_btn" to="/service/electricity">
                  <img src="@/assets/services/stp-service-electricity.png" />
                  <span class="btn_label">Electricity Payment</span>
               </router-link>
            </div>
            <div>
               <router-link class="icon_btn" to="/service/broadband">
                  <img src="@/assets/services/stp-service-broadband.png" />
                  <span class="btn_label">Broadband Payment</span>
               </router-link>
            </div>
            <div>
               <router-link class="icon_btn" to="/service/fastag">
                  <img src="@/assets/services/stp-service-fastag-icon.png" />
                  <span class="btn_label">Fastag Payment</span>
               </router-link>
            </div>
            <div>
               <router-link class="icon_btn" to="/service/wallet">
                  <img src="@/assets/services/stp-service-wallet.png" />
                  <span class="btn_label">Wallet Topup</span>
               </router-link>
            </div>
            <div>
               <router-link class="icon_btn" to="/service/transfer">
                  <img src="@/assets/services/stp-service-money-transfer.png" />
                  <span class="btn_label">Scan &amp; Pay</span>
               </router-link>
            </div>
            <div>
               <a @click.prevent="isExpanded = !isExpanded" class="icon_btn" to="/service/electricity">
                  <img src="@/assets/services/more_icon.png" />
                  <span class="btn_label">More</span>
               </a>
            </div>
            <div v-if="isExpanded">
               <router-link class="icon_btn" to="/service/hotel_booking">
                  <img src="@/assets/services/hotel_booking.png" />
                  <span class="btn_label">Hotel Booking</span>
               </router-link>
            </div>
            <div v-if="isExpanded">
               <router-link class="icon_btn" to="/service/flight_booking">
                  <img src="@/assets/services/flight_booking_icon.png" />
                  <span class="btn_label">Flight Booking</span>
               </router-link>
            </div>
            <div v-if="isExpanded">
               <router-link class="icon_btn" to="/service/bus_booking">
                  <img src="@/assets/services/bus_booking_icon.png" />
                  <span class="btn_label">Bus Booking</span>
               </router-link>
            </div>
            <div v-if="isExpanded">
               <router-link class="icon_btn" to="/service/referral">
                  <img src="@/assets/services/stp-invite-friends.png" />
                  <span class="btn_label">Refer &amp; Earn</span>
               </router-link>
            </div>
            <div v-if="isExpanded">
               <router-link class="icon_btn" to="/service/property_tax">
                  <img src="@/assets/services/property_tax_icon.png" />
                  <span class="btn_label">Property Tax</span>
               </router-link>
            </div>
            <div v-if="isExpanded">
               <router-link class="icon_btn" to="/service/insurance">
                  <img src="@/assets/services/insurance_icon.png" />
                  <span class="btn_label">Insurance</span>
               </router-link>
            </div>
            <div v-if="isExpanded">
               <router-link class="icon_btn" to="/service/water_bill">
                  <img src="@/assets/services/water_bill_icon.png" />
                  <span class="btn_label">Water Bill</span>
               </router-link>
            </div>
            <div v-if="isExpanded">
               <router-link class="icon_btn" to="/service/store">
                  <img src="@/assets/services/shopping-icon.png" />
                  <span class="btn_label">ST Patil Store</span>
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
   data() {
      return {
         isExpanded: false,
      }
   }
}
</script>
<style lang="scss" scoped>
.service_section {
   background: var(--primary-color);
   padding: 1rem 0;
   @media screen and (max-width: 700px) {
      .container {
         padding: 0;
      }
   }
   .services_grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      background: none !important;
      @media screen and (min-width: 700px) {
         grid-template-columns: repeat(8, 1fr);
      }
      gap: 1px;
      .icon_btn {
         color: #fff;
         padding: .5rem;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         text-align: center;
         font-size: 12px;
         text-decoration: none;
         img {
            width: 40px;
            height: 40px;
            border-radius: 1000px;
            margin-bottom: 3px;
         }
         .btn_label {
            overflow: hidden;
            @media screen and (min-width: 600px) {
               text-overflow: ellipsis;
               max-width: 100%;
               white-space: nowrap;
            }
         }
      }
   }
}

</style>
