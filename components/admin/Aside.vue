<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo h-100"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-s-marketing"></i>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-document-add"></i>
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-document-copy"></i>
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-s-custom"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-back"></i>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
    export default {
      methods: {

      }
    }
</script>

<style lang="scss" scoped>

</style>
