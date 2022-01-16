<template>
  <div class="home">
    <el-container height="100%">
      <el-aside width="auto" height="100%">
        <CommentAside></CommentAside>
      </el-aside>
      <el-container>
        <el-header>
          <CommentHeader></CommentHeader>
        </el-header>
        <CommonTag></CommonTag>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CommentAside from '../components/CommentAside.vue'
import CommentHeader from '../components/CommentHeader.vue'
import CommonTag from '../components/CommonTag.vue'

export default {
  components: {
    CommentAside,
    CommentHeader,
    CommonTag
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #333;
}
</style>
