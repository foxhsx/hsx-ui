<template>
  <div class="hsx-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HsxCheckboxGroup',
  props: {
    value: {
      type: Array,
    },
  },
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
};
</script>

<style></style>
