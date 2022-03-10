<template>
  <label class="hblog-radio" :class="{ 'is-checked': model === label }">
    <span class="hblog-radio__input">
      <span class="hblog-radio__inner"></span>
      <input
        class="hblog-radio__original"
        :value="label"
        :name="name"
        type="radio"
        v-model="model"
      />
    </span>
    <span class="hblog-radio__label">
      <slot>
        <template>{{ label }}</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'HblogRadio',
  inject: {
    RadioGroup: {
      default: '',
    },
  },
  props: {
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.RadioGroup.$emit('input', value)
          : this.$emit('input', value);
      },
    },
    isGroup() {
      return !!this.RadioGroup;
    },
  },
};
</script>

<style lang="scss">
.hblog-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  user-select: none;
  &.is-checked {
    .hblog-radio__input {
      .hblog-radio__inner {
        border-color: #409eff;
        background-color: #409eff;
        &::after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    .hblog-radio__label {
      color: #409eff;
    }
  }
  .hblog-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hblog-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .hblog-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .hblog-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>
