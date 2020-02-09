<template>
   <span>
      <button v-bind="$attrs" :class="btnClass" :disabled="loading" >
         <span v-if="loading" class="loading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
         </span>
         <span class="label" v-text="label"></span>
      </button>
   </span>
</template>
<script>
export default {
   props: {
      label: {
         type: [String]
      },
      intent: {
         type: [String],
         default: 'light border-primary text-primary'
      },
      loading: {
         type: [Boolean],
         default: false,
      }
   },
   computed: {
      btnClass() {
         let classess = [ 'btn', 'btn-' + this.intent, ]
         if(this.loading) {
            classess.push(' is_loading ')
         }
         return classess.join(' ')
      }
   }
}
</script>
<style lang="scss" scoped>
.btn {
   display: inline-flex;
   position: relative;
   border-width: 2px;
   .loading {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }
   &.is_loading {
      .label {
         color: transparent;
      }
   }
}
</style>
