<template>
  <main class="home">
    <TrainerList />
  </main>
</template>

<script>
import TrainerList from '@/components/TrainerList.vue'

export default {
  name: 'home',
  components: {
    TrainerList
  }
}
</script>
