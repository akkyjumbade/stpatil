<template>
   <Page title="Payment service" class="payment_service">
      <Appbar :back="true" />
      {{ $route.params }}

      <form class="container">
         <MobileRechargeForm />
      </form>
   </Page>
</template>

<script>
import Page from '@/components/Page'
import MobileRechargeForm from '@/components/MobileRechargeForm'
import Appbar from '@/components/Appbar'
export default {
   components: {
      Appbar,
      MobileRechargeForm,
      Page,
   },
   data() {
      return {

      }
   },
   created() {

   }
}
</script>

<style>

</style>
