<template>
  <div id="app">
    <div class="raw">
      <hblog-form :model="model" label-width="100px">
        <hblog-form-item label="用户名">
          <hblog-input placeholder="请输入用户名" />
        </hblog-form-item>
        <hblog-button type="primary">change</hblog-button>
      </hblog-form>
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
