<template>
   <Page title="Login or Register to continue">
      <Appbar :back="true" />
      <div class="layout_container mt-3">
         <ul class="nav-pills nav-fill nav justify-content-center">
            <li class="nav-item">
               <a @click.prevent="tab = 'login'" :class="{ 'disabled active': tab == 'login' }" class="nav-link" href="#">LOGIN</a>
            </li>
            <li class="nav-item">
               <a @click.prevent="tab = 'register'" :class="{ 'disabled active': tab == 'register' }" class="nav-link" href="#">REGISTER</a>
            </li>
         </ul>
      </div>
      <div class="layout_container py-3">
         <LoginForm v-if="tab == 'login'" />
         <ForgotPasswordForm v-else-if="tab == 'lost'" />
         <RegisterForm v-else />
      </div>
      <p class="text-center">or join with</p>
      <footer class="layout_container">
         <button class="oauth_btn" @click="oauthLogin('google')">
            <img src="@/assets/google-signin.png" />
         </button>
         <button class="oauth_btn" @click="oauthLogin('facebook')">
            <img src="@/assets/facebook-signin.png" />
         </button>
      </footer>
   </Page>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '@/components/RegisterForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import ForgotPasswordForm from '@/components/ForgotPasswordForm.vue'
import Page from '@/components/Page'
import Appbar from '@/components/Appbar'

import { oauthLoginAsync } from '@/services/authService.js'
import * as firebase from 'firebase';
import { Toast } from '../functions'

export default {
   components: {
      Appbar,
      Page,
      ForgotPasswordForm,
      LoginForm,
      RegisterForm
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
            Toast.fire({
               icon: 'success',
               title: 'Login successful, Welcome ' + user.name
            })
         } catch (error) {
            // this.registerFormErrors = error.errors
            Toast.fire({
               icon: 'error',
               title: error.message
            })
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
   // padding: 0 1rem;
}
@media screen and (min-width: 700px) {
   .layout_container {
      max-width: 300px;
      margin: 0 auto;
   }
}
</style>
