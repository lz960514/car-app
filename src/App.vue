<template>
  <div id="app">
    <transition :enter-active-class="enterAnimated" :leave-active-class="leaveAnimated">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enterAnimated: "animation fadeInRight",
      leaveAnimated: "animation fadeOutLeft"
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      if (toDepth > fromDepth) {
        this.enterAnimated = "animation fadeInRight";
        this.leaveAnimated = "animation fadeOutLeft";
      } else if (toDepth < fromDepth) {
        this.enterAnimated = "animation fadeInLeft";
        this.leaveAnimated = "animation fadeOutRight";
      }
    }
  }
};
</script>


<style lang="less">
@import url("./assets/styles/app.less");
</style>
