<template>
  <div class="purchase">
    <h1>购买成功</h1>
    <div>
      <p>识别下方小程序或微信搜索进入小程序，使用阅读码</p>
      <img :src="imgSource" />
      <p>阅读码：999999（点击阅读码进行复制）</p>
    </div>
    <div>
      <mt-button @click="gotoList(1)" type="danger">继续购买</mt-button>
      <mt-button @click="gotoList(2)" type="default">查看全部</mt-button>
    </div>
  </div>
</template>

<script>
import logo from "assets/logo.png";
export default {
  name: "SuccessPurchase",
  data() {
    return {
      imgSource: logo
    };
  },
  methods: {
    gotoList(kind) {
      console.log(kind, "=====kind");
      this.$router.push({
        path: "/home"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.purchase {
}
</style>

