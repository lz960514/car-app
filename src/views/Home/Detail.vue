<template>
  <div class="detail">
    <mt-header title="动态详情" :class="['header']">
      <mt-button slot="left" icon="back" @click="$router.back()">返回</mt-button>
    </mt-header>
    <!-- 数据为假数据 真实项目数据通过ajax获取 -->
    <News :news="$route.params"/>
  </div>
</template>

<script>
import News from "@/components/NewsItem";
export default {
  components: {
    News
  },
  data() {
    return {
      news: null
    };
  }
};
</script>

<style scoped lang="less">
@import url("../../assets/styles/detail.less");
</style>