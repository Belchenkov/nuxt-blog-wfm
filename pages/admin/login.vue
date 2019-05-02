<template>
    <el-card
      class="login"
      shadow="always"
    >
      <el-form
        :model="controls"
        :rules="rules"
        ref="form"
        @submit.native.prevent="onSubmit"
      >
        <h2 class="text-center">
          <i class="el-icon-lock"></i>
          Войти в панель администратора
        </h2>

        <el-form-item label="Логин" prop="login">
          <el-input v-model.trim="controls.login" />
        </el-form-item>

        <div class="mb2">
          <el-form-item label="Пароль" prop="password">
            <el-input v-model.trim="controls.password" type="password" />
          </el-form-item>
        </div>

        <el-form-item class="text-center">
          <el-button
            type="primary"
            plain
            native-type="submit"
            round
            medium
            icon="el-icon-s-custom"
            :loading="loading"
          >
            Войти
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>

<script>
    export default {
      layout: 'empty',
      data() {
        return {
          loading: false,
          controls: {
            login: '',
            password: ''
          },
          rules: {
            login: [
              { required: true, message: 'Введите логин', trigger: 'blur' }
            ],
            password: [
              { required: true, message: 'Введите пароль', trigger: 'blur' },
              { min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        onSubmit() {
          this.loading = true;
          console.log('submit')
        }
      }
    }
</script>

<style lang="scss" scoped>
  .login {
    width: 500px;
  }
</style>
