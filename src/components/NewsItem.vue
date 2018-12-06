<template>
  <div class="news-item border" @click.stop="$emit('select', news)">
    <header class="header">
      <div class="avatr">
        <img v-if="news.upic" :src="news.upic" alt="用户头像">
      </div>
      <div class="userinfo">
        <p class="top">{{news.name}}</p>
        <p class="bottom">
          <span class="date">{{news.date}}</span>
          <span class="car-type">{{news.carType}}</span>
        </p>
      </div>
      <div class="arrow-down">
        <i class="iconfont icon-ios-arrow-down"></i>
      </div>
    </header>
    <main class="main">
      <p class="content">{{news.content}}</p>
      <ul class="photos clearfix" ref="photos">
        <li v-for="(item, index) in news.photos" :key="index">
          <img :src="item">
        </li>
      </ul>
    </main>
    <footer class="footer">
      <div class="info">
        <span>{{news.praise}}赞</span>
        <span>{{news.comment}}评论</span>
      </div>
      <div class="btns">
        <i class="iconfont icon-md-thumbs-up"></i>
        <i class="iconfont icon-md-text"></i>
        <i class="iconfont icon-md-share-alt"></i>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.orientationChange(this.$refs["photos"].clientWidth);
    $(window).resize(() => {
      this.width = this.$refs["photos"].clientWidth;
    });
  },
  data() {
    return {
      width: null
    };
  },
  watch: {
    width(newValue) {
      this.orientationChange(newValue);
    },
    $route(to) {
      if (to.name === "IndexView") {
        this.orientationChange(this.$refs["photos"].clientWidth);
      } else if (to.name === "News") {
        this.orientationChange(this.$refs["photos"].clientWidth);
      }
    }
  },
  methods: {
    orientationChange(width) {
      if (width < 720) {
        $(".photos li").css({
          width: (width - 12) / 3 + "px",
          height: (width - 12) / 3 + "px",
          margin: "2px"
        });
      } else if (width > 720) {
        $(".photos li").css({
          width: (width - 16) / 4 + "px",
          height: (width - 16) / 4 + "px",
          margin: "2px"
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
@import url("../assets/styles/news-item.less");
</style>