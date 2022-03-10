<template>
  <div class="hblog-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HblogRadioGroup',
  provide() {
    return {
      RadioGroup: this,
    };
  },
  props: {
    // 使用 provide 和 inject 来做通讯
    value: null,
  },
};
</script>
