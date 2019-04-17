<template>
  <nav id="sidebar">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <ul>
      <li v-for="district in districts" v-bind:key="district">
        {{ district }}
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'
  
  export default {
    name: 'sidebar',
    computed: {
      ...mapState('trainers', {
        districts: state => state.districts
      })
    }
  }
</script>

<style lang="sass" scoped>
nav#sidebar
  position: fixed
  width: 200px
</style>

