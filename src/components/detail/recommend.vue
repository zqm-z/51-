<template>
  <div class="recommend">
    <ul>
      <li v-for="(item, index) in commendList.list" :key="index">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
        <p>{{ item.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { querydetailrecommend } from "@/network/my/index.js";
export default {
  data() {
    return {
      commendList: [],
    };
  },
  methods: {
    requestdetailrecommend() {
      querydetailrecommend().then((res) => {
        console.log(res);
        this.commendList = res.data.data;
      });
    },
  },
  mounted() {
    this.requestdetailrecommend();
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: ceil(96vw / 2);
      img {
        width: ceil(96vw / 2);
        height: 40vh;
      }
      p:nth-of-type(1) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #b2b2b2;
      }
      p:nth-of-type(2) {
        text-align: center;
        color: red;
        font-size: 2vw;
      }
    }
  }
}
</style>