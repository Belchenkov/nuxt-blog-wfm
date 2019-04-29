<template>
  <div>
    <el-header>
      <app-navigation />
    </el-header>
    <el-container>
      <el-main>
        <nuxt />
      </el-main>
      <el-footer />
    </el-container>
  </div>
</template>

<script>
  import AppNavigation from '@/components/main/Navigation';

  export default {
    components: {
      AppNavigation
    }
  }
</script>

<style lang="scss" scoped>
  header {
    padding: 0;
  }
</style>
