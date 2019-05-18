<template>
    <article class="post">
      <header class="post-header">
        <div class="post-title">
          <h1>{{post.title}}</h1>
          <nuxt-link to="/">
            <i class="el-icon-back"></i>
          </nuxt-link>
        </div>
        <div class="post-info">
          <small>
            <i class="el-icon-time"></i>
            {{ post.date | date }}
          </small>
          <small>
            <i class="el-icon-view"></i> {{post.views}}
          </small>
        </div>
        <div class="post-image">
          <img
            :src="post.imageUrl"
            alt="js"
            class="post-image"
          >
        </div>
      </header>
      <main class="post-content">
        <vue-markdown>{{post.text}}</vue-markdown>
      </main>
      <footer>
        <app-comment-form
          @created="createCommentHandler"
          v-if="canAddComment"
          :postId="post._id"
        />
        <div class="comments" v-if="post.comments.length">
          <app-comment
            v-for="comment in post.comments"
            :key="comment._id"
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
        head() {
          return {
            title: `${this.post.title} | ${process.env.appName}`
          }
        },
        validate({params}) {
          return Boolean(params.id);
        },
        async asyncData({store, params}) {
          const post = await store.dispatch('post/fetchById', params.id);
          await store.dispatch('post/addView', post);
          return {
            post: {...post, views: ++post.views}
          };
        },
        components: {
          AppComment,
          AppCommentForm
        },
       data () {
          return {
            canAddComment: true
          }
       },
        methods: {
          createCommentHandler(comment) {
            this.post.comments.unshift(comment);
            this.canAddComment = false;
          }
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
    width: 600px;
    height: 400px;
  }

  .post-content {
    margin-bottom: 2rem;
  }


</style>
