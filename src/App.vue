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
    <div class="raw">
      <hsx-button type="primary" @click="visible = true">弹框</hsx-button>
      <hsx-dialog :visible.sync="visible" title="温馨提示">
        <template v-slot:footer>
          <hsx-button type="primary" @click="visible = false">确定</hsx-button>
          <hsx-button @click="visible = false">取消</hsx-button>
        </template>
      </hsx-dialog>
    </div>
    <div class="raw">
      <hsx-input
        placeholder="请输入密码"
        v-model="value"
        clearable
        show-password
        type="password"
      ></hsx-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      value: '111',
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
