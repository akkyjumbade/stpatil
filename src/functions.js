import Axios from "axios";
import Swal from 'sweetalert2'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const baseURL = 'https://www.stpatil.com/wp-json/'
export const http = Axios.create({
   baseURL,
   headers: {
      Authorization: "Bearer 73iiSR4zyJQ9iMKyimp0hffeB5BTJ7JD",
   }
})

export const Toast = Swal.mixin({
   position: 'top',
   grow: true,
   toast: true,
   backdrop: false,
})



export const api = new WooCommerceRestApi({
   url: "https://www.stpatil.com",
   ssl: false,
   consumerKey: 'ck_00457fd32e7855d3b5cda5856f8eb5d56886ab23',
   consumerSecret: 'cs_61499534a46b17ff4818c9ef5265d94b0f8f8f77',
   wpAPI: true,
   version: 'wc/v3',
   queryStringAuth: false
});
