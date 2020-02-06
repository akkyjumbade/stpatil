import Axios from "axios";

export const baseURL = 'https://stpatil.com/'
export const http = Axios.create({
   baseURL,
})
