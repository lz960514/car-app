<template>
  <div class="mine">
    <mt-header title="我的" class="header"></mt-header>
    <div class="userinfo">
      <div class="avatr">
        <img src="https://www.thenewstnp.com/img/IMG_0020.JPG" alt="头像">
      </div>
      <div class="info">
        <span class="name">用户姓名</span>
        <span class="phone">18313846975</span>
      </div>
      <div class="right">
        <i class="iconfont icon-previewright"></i>
      </div>
    </div>
    <div class="list">
      <mt-cell
        :title="item.title"
        is-link
        v-for="(item, index) in list"
        :key="index"
        :class="[{'border':index !== list.length-1}]"
      >
        <i slot="icon" :class="['iconfont','icon-' + item.icon]"></i>
        <span v-if="item.value" style="color: #999">{{item.value}}</span>
      </mt-cell>
    </div>
    <div class="list">
      <mt-cell
        :title="item.title"
        is-link
        v-for="(item, index) in list2"
        :key="index"
        :to="item.to"
        :class="[{'border':index !== list2.length-1}]"
      >
        <i slot="icon" :class="['iconfont','icon-' + item.icon]"></i>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("/api/mine.json")
      .then(({ data }) => {
        this.list = data.list;
        this.list2 = data.list2;
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      list: [],
      list2: []
    };
  }
};
</script>

<style scoped lang="less">
@import url("../../assets/styles/mine.less");
</style>