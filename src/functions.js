import Axios from "axios";
import Swal from 'sweetalert2'

export const baseURL = 'https://www.stpatil.com/wp-json/'
export const http = Axios.create({
   baseURL,
})

export const Toast = Swal.mixin({
   position: 'top',
   grow: true,
   toast: true,
   backdrop: false,
})
