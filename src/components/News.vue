<template>
  <div
    class="news"
    v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="loading"
    infinite-scroll-distance="2"
    ref="news-view"
    @scroll="scroll"
  >
    <slot name="swipr"></slot>
    <NewsItem v-for="(item, index) in news" :key="index" :news="item" @select="select"/>
    <Spinner v-show="loading"/>
  </div>
</template>

<script>
import NewsItem from "@/components/NewsItem";
import Spinner from "@/components/Spinner";
export default {
  components: {
    NewsItem,
    Spinner
  },
  props: {
    news: {
      type: Array,
      required: true
    },
    loadMore: {
      type: Function,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    select(val) {
      this.$emit("select", val);
    },
    scroll() {
      localStorage.setItem("scrollTop", this.$refs["news-view"].scrollTop);
    }
  },
  watch: {
    $route(to) {
      if (to.name === "IndexView") {
        const scrollTop = localStorage.getItem("scrollTop");
        if (scrollTop) {
          this.$refs["news-view"].scrollTop = Number(scrollTop);
        } else {
          this.$refs["news-view"].scrollTop = 0;
        }
      }
    }
  }
};
</script>

<style scoped lang="less">
@import url("../assets/styles/news.less");
</style>