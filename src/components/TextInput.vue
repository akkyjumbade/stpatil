<template>
   <div class="form-group">
      <label v-if="label" v-text="label"></label>
      <div>
         <input v-bind="$attrs" class="form-control" />
      </div>
      <slot name="footer"></slot>
      <p v-if="error" v-text="error"></p>
   </div>
</template>

<script>
export default {
   props: {
      label: {
         type: String,
      },
      error: {
         type: String,
      },
   },

}
</script>

<style lang="scss" scoped>
.form-control {
   border-width: 2px;
}
</style>
