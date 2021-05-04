<template>
  <div class="detail" v-if="detailList.hasOwnProperty('itemInfo')">
    <van-swipe :autoplay="3000">
      <van-swipe-item
        v-for="(item, index) in detailList.itemInfo.topImages"
        :key="index"
      >
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div>
      <p>{{ detailList.itemInfo.desc }}</p>
      <p>
        <span>{{ detailList.itemInfo.price }}</span>
        <span>{{ detailList.itemInfo.discountDesc }}</span>
      </p>
      <span v-for="(item, index) in detailList.columns" :key="index">
        {{ item }}
      </span>
    </div>
    <div class="xiaogou">
      <p>{{ detailList.detailInfo.detailImage[0].key }}</p>
      <p
        v-for="(item, index) in detailList.detailInfo.detailImage[0].list"
        :key="index"
      >
        <img :src="item" alt="" />
      </p>
    </div>
    <recommend></recommend>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="star" text="收藏" color="#ff5000" />
      <van-goods-action-button
        type="warning"
        @click="tovuexshop"
        text="加入购物车"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { querydetail } from "@/network/my/index.js";
import recommend from "@/components/detail/recommend";
export default {
  data() {
    return {
      dataJson: [],
      detailList: [],
       num: 1,
    };
  },
  methods: {
    requestdetail() {
      querydetail({ goodsId: this.$route.params.id }).then((res) => {
        console.log(res.data.result);
        this.dataJson = res.data;
        this.detailList = res.data.result;
        console.log(this.$route.params.id);
      });
    },
    tovuexshop() {
      let obj = {};
      let arr = this.$store.state.setData;
      console.log(arr);
      let _index = arr.findIndex((item) => {
        return this.detailList.itemInfo.iid == item.iid;
      });
      console.log(_index);
      obj.num = 1;
      if (_index > -1) {
        obj = arr[_index];
        obj.num = obj.num + this.num;
        arr.splice(_index, 1, obj);
      } else {
        obj = this.dataJson;
        console.log(this.dataJson);
        obj.num = this.num;
        arr.push(obj);
      }
      console.log(arr);
      this.$store.commit("setVuexShop", arr);
      console.log(this.$store.state.setData);
    },
  },
  mounted() {
    this.requestdetail();
  },
  components: { recommend },
};
</script>

<style lang="scss" scoped>
.van-swipe {
  .van-swipe-item {
    img {
      width: 100vw;
    }
  }
}
.xiaogou {
  img {
    width: 100vw;
  }
}
</style>