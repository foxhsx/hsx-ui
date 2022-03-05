<template>
  <div id="app">
    <div class="raw">
      <hsx-button @click="fn" plain disabled type="primary">按钮</hsx-button>
      <hsx-button disabled plain type="info">登录</hsx-button>
      <hsx-button disabled plain type="danger">注册</hsx-button>
      <hsx-button disabled plain type="warning">注册</hsx-button>
      <hsx-button disabled plain type="success">注册</hsx-button>
      <hsx-button disabled plain>注册</hsx-button>
    </div>
    <div class="raw">
      <hsx-button
        circle
        disabled
        icon="hsx-icon-delete"
        type="primary"
      ></hsx-button>
      <hsx-button
        circle
        disabled
        icon="hsx-icon-delete"
        type="info"
      ></hsx-button>
      <hsx-button
        circle
        disabled
        icon="hsx-icon-delete"
        type="danger"
      ></hsx-button>
      <hsx-button
        circle
        disabled
        icon="hsx-icon-delete"
        type="warning"
      ></hsx-button>
      <hsx-button
        circle
        disabled
        icon="hsx-icon-delete"
        type="success"
      ></hsx-button>
      <hsx-button circle disabled icon="hsx-icon-delete"></hsx-button>
    </div>
  </div>
</template>

<script>
export default {
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
