<template>
   <figure>
      <picture>
         <img src="product.image" />
      </picture>
      <figcaption>
         {{ product }}
      </figcaption>
   </figure>
</template>

<script>
export default {
   props: {
      product: {
         type: [Object],
      },
   },
}
</script>

<style lang="scss" scoped>
figure {
   max-width: 300px;
   background: #fff;
   picture {
      display: block;
      img {
         width: 100%;
         max-width: 100%;
         height: 300px;
         object-fit: cover;
      }
      margin-bottom: 1rem;
   }
}
</style>
