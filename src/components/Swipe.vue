<template>
  <mt-swipe :auto="4000" class="swipe">
    <mt-swipe-item v-for="(item, index) in imgs" :key="index">
        <img :src="item.src" :alt="item.alt" style="width:100%">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="postcss">
.mint-swipe-item {
    font-size: 0;
}
.swipe {
  height: 142px;
}
</style>