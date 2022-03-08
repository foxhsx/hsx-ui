<template>
  <div id="app">
    <div class="raw">
      <hsx-checkbox-group v-model="active">
        <hsx-checkbox label="Vue"></hsx-checkbox>
        <hsx-checkbox label="React"></hsx-checkbox>
        <hsx-checkbox label="Angular"></hsx-checkbox>
      </hsx-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: [],
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
