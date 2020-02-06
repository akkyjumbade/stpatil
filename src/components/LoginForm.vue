<template>
   <form @submit.prevent="login">
      <div class="form-group">
         <label class="control-label">Username or E-Mail</label>
         <input class="form-control" placeholder="" name="username" required />
      </div>
      <div class="form-group">
         <label class="control-label">Password</label>
         <input class="form-control" placeholder="" name="password" type="password" required />
      </div>
      <div class="form-group">
         <button :disabled="formLoading" class="btn btn-primary btn-block btn-lg">LOGIN</button>
      </div>
   </form>
</template>

<script>
export default {
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
            const { data } = await this.$http.post('/login', {
               username: this.username,
               password: this.password,
            })
            console.log({ data })
         } catch (error) {
            console.log({ error })
         } finally {
            this.formLoading = false
         }
      }
   },
}
</script>

<style>

</style>
