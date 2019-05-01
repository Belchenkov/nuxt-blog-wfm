<template>
    <article class="post">
      <header class="post-header">
        <div class="post-title">
          <h1>Post Title</h1>
          <nuxt-link to="/">
            <i class="el-icon-back"></i>
          </nuxt-link>
        </div>
        <div class="post-info">
          <small>
            <i class="el-icon-time"></i>
            {{ new Date().toLocaleString() }}
          </small>
          <small>
            <i class="el-icon-view"></i> 42
          </small>
        </div>
        <div class="post-image">
          <img
            src="https://www.hostinger.ru/rukovodstva/wp-content/uploads/sites/8/2018/08/chto-takoe-javascript.jpg"
            alt="js"
            class="post-image"
          >
        </div>
      </header>
      <main class="post-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur consequuntur
          cum cupiditate dolorem dolorum eaque earum eius eveniet ex expedita incidunt ipsum itaque magni necessitatibus,
          nesciunt nostrum nulla omnis pariatur provident quia quod reiciendis suscipit tempora tenetur ullam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur consequuntur
          cum cupiditate dolorem dolorum eaque earum eius eveniet ex expedita incidunt ipsum itaque magni necessitatibus,
          nesciunt nostrum nulla omnis pariatur provident quia quod reiciendis suscipit tempora tenetur ullam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur consequuntur
          cum cupiditate dolorem dolorum eaque earum eius eveniet ex expedita incidunt ipsum itaque magni necessitatibus,
          nesciunt nostrum nulla omnis pariatur provident quia quod reiciendis suscipit tempora tenetur ullam.</p>
      </main>
      <footer>
        <app-comment-form />
        <div class="comments" v-if="true">
          <app-comment
            v-for="comment in 4"
            :key="comment"
            :comment="comment"
          />
        </div>
        <div class="text-center" v-else>Комментариев нет</div>
      </footer>
    </article>
</template>

<script>
    import AppComment from '@/components/main/Comment';
    import AppCommentForm from '@/components/main/CommentForm';

    export default {
        validate({params}) {
          return Boolean(params.id);
        },
        components: {
          AppComment,
          AppCommentForm
        }
    }
</script>

<style lang="scss" scoped>
  .post {
    max-width: 600px;
    margin: 0 auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: .51rem;
    align-items: center;
  }

  .post-image {
    width: 100%;
    height: auto;
  }

  .post-content {
    margin-bottom: 2rem;
  }


</style>
