<template>
  <main class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
