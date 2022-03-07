<template>
  <label
    class="hsx-switch"
    :class="{ 'is-checked': value }"
    @click="handleClick"
    :for="name"
  >
    <input type="checkbox" class="hsx-switch__input" :name="name" />
    <span class="hsx-switch__core" ref="core">
      <span class="hsx-switch__button"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'HsxSwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
    name: {
      tyep: String,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$emit('input', !this.value);
      // 等父级组件的 value 发生改变时，再 changeColor
      this.$nextTick(() => {
        this.changeColor();
      });
    },
    changeColor() {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
  mounted() {
    this.changeColor();
  },
};
</script>

<style lang="scss" scoped>
.hsx-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .hsx-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .hsx-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked {
    .hsx-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .hsx-switch__button {
        transform: translateX(20px);
      }
    }
  }
  .hsx-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
</style>
