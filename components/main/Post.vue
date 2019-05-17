<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post-header">
      <h2>{{post.title}}</h2>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date(post.date).toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        :src="post.imageUrl"
        alt="image"
        class="post-image"
      >
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost(post._id)">Открыть</el-button>
      <span>
        <i class="el-icon-message"></i>
        {{ post.comments.length }}
      </span>
    </footer>
  </el-card>
</template>

<script>
    export default {
      props: {
        post: {
          type: Object,
          required: true
        }
      },
      methods: {
        openPost(id) {
          this.$router.push(`/post/${id}`);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 1.5rem;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-image {
    width: 600px;
    height: 400px;
  }

  .post-body {
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
</style>
