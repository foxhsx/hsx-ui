<template>
  <button
    class="hsx-button"
    :class="[
      `hsx-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果传了插槽就展示，没有传递则不渲染 -->
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>
export default {
  name: 'HsxButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="scss" scoped>
// 初始样式
.hsx-button {
  display: inline-block;
  line-height: 1;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  -webkit-appearance: none;
  margin: 0;
  transition: 0.1s;
  outline: none;
  font-weight: 500;
  /* 禁止文字选中 */
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  [class*='hsx-icon'] + span {
    margin-left: 5px;
  }
}
// type 属性样式
.hsx-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    border-color: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
}
.hsx-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    border-color: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
}
.hsx-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    border-color: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
}
.hsx-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    border-color: #f78989;
    background-color: #f78989;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
}
.hsx-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    border-color: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
}
// plain 样式
.hsx-button.is-plain {
  &:hover,
  &:focus {
    background-color: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    background-color: #fff;
    border-color: #ebeef5;
    color: #c0c4cc;
  }
}
.hsx-button--primary.is-plain {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3b3b3;
  &:hover,
  &:focus {
    border-color: #409eff;
    background-color: #409eff;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff;
  }
}
.hsx-button--success.is-plain {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    border-color: #67c23a;
    background-color: #67c23a;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
  }
}
.hsx-button--warning.is-plain {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    border-color: #e6a23c;
    background-color: #e6a23c;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8;
  }
}
.hsx-button--danger.is-plain {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    border-color: #f56c6c;
    background-color: #f56c6c;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2;
  }
}
.hsx-button--info.is-plain {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    border-color: #909399;
    background-color: #909399;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
  }
}
</style>
