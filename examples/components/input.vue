<template>
  <div class="hsx-input" :class="{ 'hsx-input--suffix': showSuffix }">
    <input
      class="hsx-input__inner"
      :placeholder="placeholder"
      :type="showPassword ? (showPasswordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :class="[{ 'is-disabled': disabled }]"
      :value="value"
      @input="handleInput"
    />
    <span class="hsx-input__suffix" v-if="showSuffix">
      <i class="hsx-icon-cancel" v-if="clearable && value" @click="clear"></i>
      <i
        class="hsx-icon-visible"
        v-if="showPassword && type === 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HsxInput',
  data() {
    return {
      // 控制是否显示密码框
      showPasswordVisible: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showSuffix() {
      return this.clearbale || this.showPassword;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    clear() {
      this.$emit('input', '');
    },
    handlePassword() {
      this.showPasswordVisible = !this.showPasswordVisible;
    },
  },
};
</script>

<style lang="scss">
.hsx-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hsx-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus,
    &:hover {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  &.hsx-input--suffix {
    .hsx-input__inner {
      padding-right: 30px;
    }
    .hsx-input__suffix {
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all 0.3s;
      z-index: 900;
      i {
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
}
</style>
