<template>
   <form @submit.prevent="login">
      <TextInput label="Username or E-Mail" name="username" required />
      <div class="form-group">
         <Button :loading="formLoading" label="SEND RESET PASSWORD" />
      </div>
   </form>
</template>

<script>
import TextInput from './TextInput'
import Button from './Button'
export default {
   components: {
      Button,
      TextInput,
   },
   data() {
      return {
         username: '',
         formLoading: false,
         errors: null,
      }
   },
   methods: {
      async login() {
         this.formLoading = true
         try {
            const { data } = await this.$http.post('/send_lost_password', {
               username: this.username,
            })
            JSON.stringify(data)
            // console.log({ data })
         } catch (error) {
            // console.log({ error })
         } finally {
            this.formLoading = false
         }
      }
   },
}
</script>

<style>

</style>
