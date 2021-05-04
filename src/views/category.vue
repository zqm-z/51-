<template>
  <div class="category">
    <top :title="'商品分类'"></top>
    <div class="box">
      <categoryTitle></categoryTitle>
      <categoryitem></categoryitem>
    </div>
  </div>
</template>

<script>
import categoryTitle from "@/components/category/categoryTitle";
import categoryitem from "@/components/category/categoryitem";
import top from "@/components/my/top";
export default {
  components: { top, categoryTitle,categoryitem },
};
</script>

<style lang="scss" scoped>
.category{
  .box{
    display: flex;
  }
}
</style>