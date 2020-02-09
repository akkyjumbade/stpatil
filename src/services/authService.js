import { http } from "../functions"
import * as firebase from 'firebase';

export function loginAsync(username, password) {
   return new Promise(async (resolve, reject) => {
      try {
         const { data } = await http.post('/app/auth_login', {
            username, password
         })
         if(data.ok) {
            resolve(data)
         } else {
            reject(data)
         }
      } catch (error) {
         reject(error)
      }
   })
}
export function oauthLoginAsync(type = 'google') {
   return new Promise(async (resolve, reject) => {
      let baseProvider = new firebase.auth.GoogleAuthProvider()
      if(type == 'google') {
         baseProvider = new firebase.auth.GoogleAuthProvider()
      } else if( type == 'facebook') {
         baseProvider = new firebase.auth.FacebookAuthProvider()
      }
      try {
         const result = await firebase.auth().signInWithPopup(baseProvider)
         const { data: userData } = await http.post('/auth/oauth_signin/google', result)
         if(userData && userData.ok) {
            resolve(userData)
         } else {
            reject(userData)
         }
      } catch (error) {
         reject(error)
      }
   })
}

export function registerAsync(username, password) {
   return new Promise(async (resolve, reject) => {
      try {
         const { data } = await http.post('/app/auth_login', {
            username, password
         })
         if(data.ok) {
            resolve(data)
         } else {
            reject(data)
         }
      } catch (error) {
         reject(error)
      }
   })
}
