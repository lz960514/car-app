<template>
  <div class="more">
    <mt-header title="跟多设置" class="header">
      <mt-button slot="left" icon="back" @click="$router.back()">返回</mt-button>
    </mt-header>
    <div class="list">
      <div v-for="(item, index) in list" :key="index" class="list-item" @click.stop="click1(item)">
        <mt-cell
          :title="item.title"
          :class="[{'border':index !== list.length-1}]"
          :is-link="!item.btn"
        >
          <mt-switch v-if="item.btn" v-model="item.value"></mt-switch>
          <span v-if="item.hasOwnProperty('text')">{{item.text}}MB</span>
        </mt-cell>
      </div>
    </div>
    <div class="btn">
      <mt-button type="default" size="large" @click="signOut">退出登录</mt-button>
    </div>
  </div>
</template>

<script>
import { Indicator, Toast } from "mint-ui";
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    axios
      .get("/api/more.json")
      .then(({ data }) => {
        this.list = data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    signOut() {},
    click1(item) {
      if (item.hasOwnProperty("text")) {
        Indicator.open("正在清理缓存...");
        this.timer = setTimeout(() => {
          Indicator.close();
          Toast({
            message: "缓存清理成功总计" + item.text + "M",
            duration: 1500
          });
          item.text = 0;
        }, 2000);
      }
    }
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }
};
</script>

<style scoped lang="less">
@import url("../../assets/styles/more.less");
</style>