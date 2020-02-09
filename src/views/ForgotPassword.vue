<template>
   <Page title="Lost password?">
      <div class="d-block text-center px-5">
         <a href="#" class="logo">
            <picture class="embed-responsive embed-responsive-1by1">
               <img src="https://www.stpatil.com/wp-content/uploads/2019/12/500x500-png-logo.png" class="embed-responsive-item" />
            </picture>
         </a>
      </div>
      <div class="container py-5">
         <ForgotPasswordForm />
      </div>
      <p class="text-center">
         Remembered? <router-link to="/login">Login Now</router-link>
      </p>
   </Page>
</template>

<script>
// @ is an alias to /src
import ForgotPasswordForm from '@/components/ForgotPasswordForm.vue'
import Page from '@/components/Page'

import { oauthLoginAsync } from '@/services/authService.js'
import * as firebase from 'firebase';

export default {
   components: {
      Page,
      ForgotPasswordForm,
   },
   data() {
      return {
         app: null,
         tab: 'register'
      }
   },
   methods: {
      oauthLogin: async (type) => {
         try {
            const user = await oauthLoginAsync(type)
            JSON.stringify({user})
         } catch (error) {
            // this.registerFormErrors = error.errors
            // console.log({error})
         }
      }
   },
   mounted() {
      if(window.firebaseConfig) {
         var app = firebase.initializeApp({ ...window.firebaseConfig });
         firebase.analytics();
         this.app = app
      }

   }
}
</script>
<style scoped lang="scss">
.oauth_btn {
   border: none;
   background: none;
   border: 1px solid #eee;
   background: none;
   height: 40px;
   border-radius: 4px;
   img {
      max-width: 100%;
   }
}
.logo {
   display: block;
   picture {
      max-width: 90px;
      margin: 1rem auto;
   }
}
footer {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1rem;
   align-items: center;
   justify-content: center;
   padding: 0 1rem;
}
</style>
