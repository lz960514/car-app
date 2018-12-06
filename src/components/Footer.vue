<template>
  <mt-tabbar v-model="selected" class="footer">
    <mt-tab-item id="home">
      <i slot="icon" class="iconfont icon-ios-home"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="club">
      <i slot="icon" class="iconfont icon-md-car"></i>
      车汇
    </mt-tab-item>
    <mt-tab-item id="message">
      <i slot="icon" class="iconfont icon-md-chatboxes"></i>
      消息
    </mt-tab-item>
    <mt-tab-item id="mine">
      <i slot="icon" class="iconfont icon-md-person"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      selected: "home"
    };
  },
  watch: {
    value(newValue) {
      this.selected = newValue;
    },
    selected(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>

<style scoped lang="less">
@import url("../assets/styles/footer.less");
</style>