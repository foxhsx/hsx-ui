<template>
  <div id="app">
    <div class="raw">
      <hsx-form :model="model" label-width="100px">
        <hsx-form-item label="用户名">
          <hsx-input placeholder="请输入用户名" />
        </hsx-form-item>
      </hsx-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    fn() {
      console.log(123);
    },
  },
};
</script>

<style lang="scss" scoped>
.raw {
  margin: 15px 0;
  button {
    margin: 0 12px;
  }
}
</style>
