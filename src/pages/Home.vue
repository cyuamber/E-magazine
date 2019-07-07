<template>
  <div class="home">
    <div class="home-header">
      <el-input
        class="home-header-search"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="searchContent"
      ></el-input>
    </div>
    <div class="home-content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">杂志</mt-tab-item>
        <mt-tab-item id="2">阅读码</mt-tab-item>
      </mt-navbar>
      <div v-if="+selected===1">
        <mt-cell v-for="(n,index) in 10" :key="index" :title="'杂志 ' + n">
          <MagButton label="预览" type="white" @buttonAction="gotoPage" />
          <MagButton label="开始阅读" type="red" @buttonAction="showPrice" />
        </mt-cell>
      </div>
      <div v-if="+selected===2">阅读码</div>
    </div>
  </div>
</template>

<script>
import MagButton from "components/Button.vue";
export default {
  name: "home",
  components: { MagButton },

  data() {
    return { selected: "1", searchContent: "" };
  },
  mounted() {},
  methods: {
    showContent() {
      console.log(this.searchContent, "=searchContent");
    },
    gotoPage() {
      this.$router.push({
        path: "/imagebackground"
      });
    },
    showPrice() {}
  }
};
</script>

<style lang="less" scoped>
.home {
  .home-header {
    width: 100%;
    height: 3rem;
    position: relative;
    background: tomato;
    .home-header-search {
      width: 80%;
      margin: 0.1rem auto;
    }
  }
}
</style>

