<template>
  <main class="home">
    <TeamList />
  </main>
</template>

<script>
import TeamList from '@/components/TeamList.vue'

export default {
  name: 'team',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('switchView', 'team')
    })
  },
  components: {
    TeamList
  }
}
</script>
