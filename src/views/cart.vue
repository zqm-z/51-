<template>
  <div class="cart">
    <!-- {{cartList}} -->
    <top :title="'购物车'"></top>
    <van-card
      v-for="(item, index) in cartList"
      :key="index"
      :num="item.num"
      :price="item.result.itemInfo.highNowPrice"
      :desc="item.result.itemInfo.desc"
      :title="item.result.itemInfo.desc"
      :thumb="item.result.itemInfo.topImages[0]"
    />
      <p>总数{{ cartList | filterTotalNum }}</p>
  <p>总价{{ cartList | filterTotalPrice }}</p>
    <van-submit-bar :price="3050" button-text="去结算" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import top from "@/components/my/top";
export default {
  data() {
    return {
      checked: false,
      cartList: this.$store.state.setData,
    };
  },
   filters: {
   filterTotalNum(arr) {
     let total = 0;
     arr.forEach((item) => {
       total += item.num;
     });
     return total;
   },
   filterTotalPrice(arr) {
     let priceAll = 0;
     arr.forEach((item) => {
       priceAll += item.result.itemInfo.highNowPrice * item.num;
     });
     return priceAll;
   },
 },
  methods: {
    onSubmit() {},
  },
  components: { top },
};
</script>

<style lang="scss" scoped>
.van-submit-bar {
  background-color: #ccc;
  position: fixed;
  bottom: 8vh;
  left: 0;
}
</style>