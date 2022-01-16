<template>
  <header>
    <div class="l-content">
      <el-button size="mini" plain @click="changeStatus()">
        <i class="el-icon-menu"></i>
      </el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i class="el-icon-user-solid"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import eventBus from '@/store/eventBus.js'
import { mapState } from 'vuex'

export default {
  name: 'CommentHeader',
  data () {
    return {
      menuStatus: false
    }
  },
  methods: {
    changeStatus () {
      this.menuStatus = !this.menuStatus
      eventBus.$emit('menuStatus', this.menuStatus)
    }
  },
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu
    })
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.l-content {
  display: flex;
  align-items: center;

  .el-button {
    margin-right: 20px;
  }
}

.el-icon-user-solid {
  color: #fff;
  font-size: 24px;
}
</style>

<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666;
    font-weight: normal;
  }

  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
    }
  }
}
</style>
