<template>
  <mt-button :class="[type==='white'?'white':'red','button']" @click="buttonAction">{{label}}</mt-button>
</template>

<script>
export default {
  name: "MagButton",
  props: {
    type: String,
    label: String
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    buttonAction() {
      this.$emit("buttonAction");
    }
  }
};
</script>

<style lang="less" scoped>
.button {
  border-radius: 0.2rem;
  margin: 0 0.1rem;
  padding: 0.1rem 0.2rem;
  font-size: 0.14rem;
}
.red {
  background: red;
  color: #fff;
  border: red;
}
.white {
  background: #fff;
  color: red;
  border: #fff;
}
</style>

