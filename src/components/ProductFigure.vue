<template>
   <figure>
      <Slick :options="{ arrows: false, dots: false, autoPlay: true, }">
         <a :title="product.name" :href="product.permalink" class="d-bl" v-for="(img, imgk) in product.images" :key="imgk">
            <picture class="embed-responsive embed_3by4 mb-0" >
               <img ref="imageEl" :src="img.src" class="embed-responsive-item" />
            </picture>
         </a>
      </Slick>
      <figcaption>
         <p class="mb-0">
            <a v-for="(cat, catk) in product.categories" :key="catk" class="cat_name mr-1 text-dark" :href="`/${cat.slug}`" v-text="`#${cat.name}`"></a>
         </p>
         <p class="mb-0">
            <a class="name text-dark font-weight-bold" :title="product.name" :href="product.permalink" v-text="product.name"></a>
         </p>
         <p class="mb-0">
            <span v-text="'Rs. '+product.price"></span>
         </p>
      </figcaption>
   </figure>
</template>

<script>
import Slick from 'vue-slick'
export default {
   components: {
      Slick
   },
   props: {
      product: {
         type: [Object],
      },
   },
   methods: {
      initCarousel() {},
      loadImage() {
         const img = new Image
         img.addEventListener('load', () => {

         })
         // img.src = this.product.
      }
   },
   mounted() {
      this.loadImage()
   }
}
</script>

<style lang="scss" scoped>
figure {
   max-width: 250px;
   background: #fff;
   picture {
      background: #f3f3f3;
      display: block;
      &.embed_3by4:before {
         padding-top: 115%;
      }
      img {
         width: 100%;
         max-width: 100%;
         height: 300px;
         object-fit: cover;
      }
      margin-bottom: 1rem;
   }
   figcaption {
      font-size: 14px;
      .name {
         // font-size: 14px;
      }
   }

   .slick-dots {
      bottom: 10px;
   }
}
</style>
