<template>
  <main class="home">
    <TrainerList />
  </main>
</template>

<script>
import TrainerList from '@/components/TrainerList.vue'

export default {
  name: 'trainers',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('switchView', 'trainers')
    })
  },
  components: {
    TrainerList
  }
}
</script>
