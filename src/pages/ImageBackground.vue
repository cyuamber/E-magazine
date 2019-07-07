<template>
  <div class="detail">
    <mt-swipe class="detail-swiper" :auto="3000" :show-indicators="false">
      <mt-swipe-item v-for="(img,index) in imgSource" :key="index">
        <img :src="img" class="detail-swiper-img" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="detail-msg">
      <p class="detail-msg-num">已有2216人阅读</p>
      <p class="detail-msg-name">杂志名称</p>
      <div>
        <MagButton label="回到首页" type="white" @buttonAction="gotoList(1)" />
        <MagButton label="购买阅读码" type="red" @buttonAction="gotoList(2)" />
      </div>
    </div>
  </div>
</template>

<script>
import MagButton from "components/Button.vue";
import demo1 from "assets/img/demo1.jpeg";
import demo2 from "assets/img/demo2.jpeg";

export default {
  name: "imagebackground",
  components: { MagButton },
  data() {
    return {
      imgSource: [demo1, demo2]
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
.detail {
  height: 100%;
  overflow: hidden;
  .detail-swiper {
    height: 100%;
    width: 100%;
    background-color: #fff;
    background-image: linear-gradient(to bottom, #eee, #000);
    .detail-swiper-img {
      height: 100%;
      width: 100%;
      opacity: 0.6;
    }
  }
  .detail-msg {
    width: 100%;
    position: fixed;
    bottom: 0.4rem;
    margin: 0 auto;
    font-size: 0.2rem;
    color: #fff;
    z-index: 2;
    .detail-msg-num {
      font-size: 0.12rem;
    }
    .detail-msg-name {
      font-size: 0.16rem;
      margin-bottom: 0.16rem;
    }
  }
}
</style>

