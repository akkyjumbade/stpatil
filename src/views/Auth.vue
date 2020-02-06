<template>
   <Page title="Login or Register to continue">
      <div class="d-block text-center px-5">
         <a href="#" class="logo">
            <picture class="embed-responsive embed-responsive-1by1">
               <img src="https://www.stpatil.com/wp-content/uploads/2019/12/500x500-png-logo.png" class="embed-responsive-item" />
            </picture>
         </a>
      </div>
      <ul class="nav justify-content-center">
         <li class="nav-item">
            <a @click.prevent="tab = 'login'" :class="{ 'disabled': tab == 'login' }" class="nav-link active" href="#">LOGIN</a>
         </li>
         <li class="nav-item">
            <a @click.prevent="tab = 'register'" :class="{ 'disabled': tab == 'register' }" class="nav-link" href="#">REGISTER</a>
         </li>
      </ul>
      <div class="container py-5">
         <LoginForm v-if="tab == 'login'" />
         <RegisterForm v-else />
      </div>

      <footer>
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
import * as firebase from 'firebase';
import { http } from '@/functions.js'

export default {
   components: {
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
      oauthLogin: async () => {
         const baseProvider = new firebase.auth.GoogleAuthProvider()
         try {
            const result = await firebase.auth().signInWithPopup(baseProvider)
            const {data} = await http.post('/auth/oauth_signin/google', result)
            if(data && data.ok) {
               // succcess we are created account and redirecting user to home
               location.reload()
            } else {
               this.registerFormErrors = data.errors
            }
            console.log({result, data})
         } catch (error) {
            console.log({error})
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
   margin: 0 1rem;
   border-radius: 4px;
   img {
      max-width: 100%;
   }
}
.logo {
   display: block;
   picture {
      max-width: 120px;
      margin: 1rem auto;
   }
}
footer {
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
