<template>
  <div class="wrapper">
    <mt-tab-container v-model="active" :swipeable="swipeable">
      <mt-tab-container-item id="home">
        <HomeView/>
      </mt-tab-container-item>
      <mt-tab-container-item id="club">
        <ClubView/>
      </mt-tab-container-item>
      <mt-tab-container-item id="message">
        <MessageView/>
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
        <MineView/>
      </mt-tab-container-item>
    </mt-tab-container>
    <Footer v-model="active"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer";
import HomeView from "@/views/Home/Home";
import ClubView from "@/views/Club/Club";
import MessageView from "@/views/Message/Message";
import MineView from "@/views/Mine/Mine";
export default {
  name: "indexView",
  components: {
    Footer,
    HomeView,
    ClubView,
    MessageView,
    MineView
  },
  data() {
    return {
      active: "home",
      swipeable: false
    };
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/styles/index.less");
</style>
