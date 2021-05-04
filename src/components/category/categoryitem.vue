<template>
  <div class="categoryitem" v-if="itemList.hasOwnProperty('data')">
    {{ this.$store.state.detailData }}
    <ul>
      <li v-for="(item, index) in itemList.data.list" :key="index">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { querycategoryitem } from "@/network/my/index.js";
export default {
  data() {
    return {
      zqm: this.$store.state.detailData,
      itemList: [],
    };
  },
  mounted() {
    this.requestcategoryitem();
  },
  methods: {
    requestcategoryitem() {
      querycategoryitem({ maitKey: this.zqm }).then((res) => {
        console.log(res);
        this.itemList = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 75vw;
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  li {
    width: ceil(75vw / 3);
    height: 15vh;
    margin-top: 2vh;
    text-align: center;
    img {
      width: ceil(60vw / 3);
      height: 10vh;
    }
    p:nth-of-type(1) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #b2b2b2;
    }
  }
}
</style>