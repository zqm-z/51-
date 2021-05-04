<template>
  <div class="top">{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.top {
  width: 100vw;
  height: 5vh;
  background-color: #ff75ae;
  line-height: 5vh;
  text-align: center;
  color: white;
}
</style>