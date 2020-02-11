<template>
   <div>
      <Slick v-bind="$props" :options="computedOptions" class="carousel" >
         <slot>
            <figure v-for="(item, itemindex) in slides" :key="itemindex" :style="'padding-right: '+itemPadding">
               <picture class="embed-responsive embed-responsive-16by9">
                  <img :src="item.src" :alt="item.title" class="embed-responsive-item" />
               </picture>
               <figcaption>
               </figcaption>
            </figure>
         </slot>
      </Slick>
   </div>
</template>

<script>
import Slick from 'vue-slick'
export default {
   components: {
      Slick,
   },
   props: {
      options: {
         type: [Object]
      },
      responsive: {
         type: [Array]
      },
      itemPadding: {
         type: [String],
         default: '0x'
      },
      slides: {
         type: [Array],
         default: () => ([
            {
               title:  '',
               src:  '//placehold.it/600x100',
            },
            {
               title:  '',
               src:  '//placehold.it/600x100',
            },
         ])
      }
   },
   computed: {
      computedOptions() {
         let options = {
            arrows: false,
            dots: true,
         };

         if(this.options) {
            return {
               ...options,
               ...this.options,
               responsive: this.responsive
            }
         }
         return options
      }
   }
}
</script>

<style lang="scss" scoped>
.carousel {
   figure {
      margin-bottom: 0;
   }
}
</style>
