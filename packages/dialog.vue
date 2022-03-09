<template>
  <transition name="dialog-fade">
    <!-- 对话框遮罩层 -->
    <div v-show="visible" class="hsx-dialog__wrapper" @click.self="handleClose">
      <div class="hsx-dialog" :style="{ width, marginTop: top }">
        <div class="hsx-dialog__header">
          <slot name="title">
            <!-- 默认展示的 title -->
            <span class="hsx-dialog__title">{{ title }}</span>
          </slot>
          <button class="hsx-dialog__headerbtn" @click="handleClose">
            <i class="hsx-icon-close"></i>
          </button>
        </div>
        <div class="hsx-dialog__body">
          <slot><span>这是一段信息</span></slot>
        </div>
        <div class="hsx-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HsxDialog',
  props: {
    title: {
      type: String,
      default: '提示',
    },
    width: {
      type: String,
      default: '50%',
    },
    top: {
      type: String,
      default: '15vh',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.hsx-dialog__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .hsx-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .hsx-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hsx-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .hsx-icon-close {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .hsx-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
