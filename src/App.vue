<template>
  <div id="app">
    <div class="box">
      <p
        :class="footActive == item.id ? 'active' : ''"
        @click="tiaozhuan(item)"
        v-for="item in footList"
        :key="item.id"
      >
        {{ item.name }}
      </p>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      footList: [
        { id: 1, name: "首页", url: "/home" },
        { id: 2, name: "分类", url: "/category" },
        { id: 3, name: "购物车", url: "/cart" },
        { id: 4, name: "我的", url: "/profile" },
      ],
      footActive: 1,
    };
  },
  methods: {
    tiaozhuan(item) {
      if (this.footActive == item.id) {
        return;
      }
      this.footActive = item.id;
      this.$router.push(item.url);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  height: 8vh;
  line-height: 8vh;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
}
.active {
  color: red;
}
</style>
