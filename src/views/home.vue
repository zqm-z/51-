<template>
  <div class="home">
    <top :title="'蘑菇街'"></top>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in bannerList.list" :key="index">
        <img :src="item.image" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <div v-for="(item, index) in contentList.list" :key="index">
        <p><img :src="item.image" alt="" /></p>
        <p>{{ item.title }}</p>
      </div>
    </div>
    <!-- 本周流行 -->
    <div class="work">
      <img src="@/assets/work.jpg" alt="" />
    </div>
    <!-- 信息导航 -->
    <div class="section">
      <p
        :class="activeIndex == index ? 'active' : ''"
        @click="dianqie(index)"
        v-for="(item, index) in gongtopList.list"
        :key="index"
      >
        {{ item.title }}
      </p>
    </div>
    <!--  -->
    <div class="xxdetail">
      <ul>
        <li
          @click="tiaozhuan(item)"
          v-for="(item, index) in gongList.list"
          :key="index"
        >
          <img :src="item.show.img" alt="" />
          <p>{{ item.title }}</p>
          <p>{{ item.orgPrice }}</p>
        </li>
      </ul>
    </div>
    <div v-if="btnFlag" @click="backTop" class="topTo">
      <img src="@/assets/top.png" alt="" />
    </div>
  </div>
</template>

<script>
import {
  queryfirst,
  queryhomepop,
  queryhomesell,
  queryhomenews,
} from "@/network/my/index.js";
// 引入头部组件
import top from "@/components/my/top";
export default {
  name: "Home",
  data() {
    return {
      firstList: [],
      bannerList: [],
      contentList: [],
      workList: [],
      //
      gongtopList: [],
      gongList: [],
      // 首页精选信息
      poptopList: [],
      popList: [],
      // 首页精选信息
      selltopList: [],
      sellList: [],
      // 首页新款信息
      newstopList: [],
      newsList: [],
      id2: 1,
      activeIndex: 0,
      btnFlag: false,
    };
  },
  methods: {
    requestFirst() {
      queryfirst().then((res) => {
        console.log(res.data.data);
        this.firstList = res.data.data;
        this.bannerList = res.data.data.banner;
        this.contentList = res.data.data.recommend;
        this.workList = res.data.data.keywords;
      });
    },
    // 首页流行信息
    requestHomepop() {
      queryhomepop({ id: this.id2 }).then((res) => {
        console.log(res);
        this.gongtopList = res.data.data.filter;
        this.gongList = res.data.data;
        this.poptopList = res.data.data.filter;
        this.popList = res.data.data;
      });
    },
    // 首页精选信息
    requestHomesell() {
      queryhomesell({ id: this.id2 }).then((res) => {
        console.log(res);
        this.selltopList = res.data.data.filter;
        this.sellList = res.data.data;
      });
    },
    // 首页新款信息
    requestHomenews() {
      queryhomenews({ id: this.id2 }).then((res) => {
        console.log(res);
        this.newstopList = res.data.data.filter;
        this.newsList = res.data.data;
      });
    },
    // 切换
    dianqie(index) {
      if (index == 0) {
        this.gongtopList = this.poptopList;
        this.gongList = this.popList;
        this.activeIndex = index;
      } else if (index == 1) {
        this.gongtopList = this.selltopList;
        this.gongList = this.sellList;
        this.activeIndex = index;
      } else if (index == 2) {
        this.gongtopList = this.newstopList;
        this.gongList = this.newsList;
        this.activeIndex = index;
      }
    },
    tiaozhuan(item) {
      console.log(item);
      this.$router.push({
        path: "/detail/" + item.iid,
        params: { id: item.iid },
      });
    },
    scrollToTop() {
      const that = this;
      let scrollTop = document.documentElement.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 1000) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
    // 回到顶部
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 10);
    },
  },
  mounted() {
    // 首页流行信息
    this.requestHomepop();
    // 首页精选信息
    this.requestHomesell();
    // 首页新款信息
    this.requestHomenews();
    this.requestFirst();
    window.addEventListener("scroll", this.scrollToTop, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop, true);
  },
  components: { top },
};
</script>
<style lang="scss" scoped>
.home {
  /* 轮播图 */
  .van-swipe {
    .van-swipe-item {
      img {
        width: 100vw;
        height: 30vh;
      }
    }
  }
  .content {
    margin-top: 2vh;
    display: flex;
    div {
      width: ceil(100% / 4);
      height: 10vh;
      text-align: center;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  .work {
    margin-top: 5vh;
    img {
      width: 100vw;
    }
  }
  .section {
    display: flex;
    justify-content: space-around;
    height: 8vh;
    line-height: 8vh;
  }
  .xxdetail {
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
  .topTo {
    position: fixed;
    right: 10vw;
    bottom: 10vh;
    img {
      width: 20vw;
    }
  }
}
.active {
  color: red;
}
</style>
