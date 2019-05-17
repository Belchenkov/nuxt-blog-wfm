<template>
    <div>
      <h1>Аналитика по постам</h1>
      <analytics-chart
        title="Количество просмотров"
        :labels="views.labels"
        :data="views.data"
      />
      <analytics-chart
        title="Количество комментариев"
        :labels="comments.labels"
        :data="comments.data"
      />
    </div>
</template>

<script>
  import AnalyticsChart from '@/components/admin/AnalyticsChart';
    export default {
       layout: 'admin',
       middleware: ['admin-auth'],
       components: { AnalyticsChart },
       async asyncData({store}) {
         const {views, comments} = await store.dispatch('post/getAnalytics');
         return {views, comments};
       }
    }
</script>

<style scoped>

</style>
