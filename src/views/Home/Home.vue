<template>
  <div class="home">
    <mt-header title="首页" :class="['header']">
      <mt-button slot="left">
        <i class="iconfont icon-md-menu"></i>
      </mt-button>
      <mt-button slot="right" @click="$router.push('/login')">登录</mt-button>
    </mt-header>
    <News :news="news" :loadMore="loadMore" :loading="loading" @select="select">
      <Swipe :imgs="banner" slot="swipr"/>
    </News>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Swipe from "@/components/Swipe";
import News from "@/components/News";
export default {
  name: "home",
  components: {
    Swipe,
    News
  },
  created() {
    axios
      .get("/api/newslist.json" + "?" + Math.random() * 10000)
      .then(({ data }) => {
        if (data) this.news = data;
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/api/banner.json" + "?" + Math.random() * 10000)
      .then(({ data }) => {
        if (data) this.banner = data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      banner: [],
      news: [],
      loading: false
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      this.timer = setTimeout(() => {
        axios
          .get("/api/addnews.json" + "?" + Math.random() * 10000)
          .then(({ data }) => {
            if (data) this.news.push(data);
          })
          .catch(err => {
            console.log(err);
          });
        this.loading = false;
      }, 3000);
    },
    select(item) {
      // console.log(item);
      this.$router.push({
        name: "News",
        params: item
      });
    }
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/styles/home.less");
</style>
