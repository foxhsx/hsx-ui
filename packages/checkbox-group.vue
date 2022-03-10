<template>
  <div class="hblog-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HblogCheckboxGroup',
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
