<template>
   <form @submit.prevent="login">
      <TextInput label="Full name" name="name" required />
      <TextInput label="E-Mail" name="email" required />
      <TextInput label="Password" name="password" type="password" required />
      <div class="form-group">
         <Button :loading="formLoading" intent="primary"  label="CREATE MY ACCOUNT" />
      </div>
   </form>
</template>

<script>
import TextInput from './TextInput'
import Button from './Button'
import { Toast } from '../functions.js'
import { loginAsync } from '../services/authService.js'

export default {
   components: {
      Button,
      TextInput,
   },
   data() {
      return {
         username: '',
         password: '',
         formLoading: false,
         errors: null,
      }
   },
   methods: {
      async login() {
         this.formLoading = true
         try {
            const user = await loginAsync(this.username, this.password)
            Toast.fire({
               icon: user ? 'success': 'warning',
               title: 'Login sucessful'
            })
            this.$router.push('/')
         } catch (error) {
            Toast.fire({
               icon: 'error',
               title: error.message
            })
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
