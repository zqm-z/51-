<template>
  <div class="categoryTitle" v-if="titleList.hasOwnProperty('category')">
    <p
      :class="index == activeIndex ? 'active' : ''"
      @click="bianhua(item, index)"
      v-for="(item, index) in titleList.category.list"
      :key="index"
    >
      {{ item.title }}
    </p>
  </div>
</template>

<script>
import { querycategorytitle } from "@/network/my/index.js";
export default {
  data() {
    return {
      titleList: [],
      activeIndex: 0,
    };
  },
  mounted() {
    this.requestCategorytitle();
  },
  methods: {
    requestCategorytitle() {
      querycategorytitle().then((res) => {
        console.log(res);
        this.titleList = res.data.data;
      });
    },
    bianhua(item, index) {
      if (index == this.activeIndex) {
        return;
      } else {
        this.activeIndex = index;
      }
      console.log(item.maitKey);
      this.$store.commit("setdetailData", item.maitKey);
    },
  },
};
</script>

<style lang="scss" scoped>
.categoryTitle {
  p {
    height: 10vh;
    width: 25vw;
    background-color: #f6f6f6;
    text-align: center;
    line-height: 10vh;
    overflow: hidden;
  }
  .active {
  background-color: #fff;
}
}
</style>