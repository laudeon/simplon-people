<template>
  <nav id="sidebar">
    <router-link to="/">Formateur⋅rice⋅s</router-link> |
    <router-link to="/team">Team</router-link>
    <ul>
      <li>
        <a v-on:click="all">Toutes</a>
      </li>
      <li v-for="district in districts" v-bind:key="district">
        <a v-on:click="filter">{{ district }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'
  
  export default {
    name: 'sidebar',
    computed: {
      ...mapState({
        districts: state => state.districts
      })
    },
    methods: {
      filter (e) {
        this.$store.commit(`${this.$store.state.activeView}/filter`, e.target.innerHTML.trim())
      },
      all (e) {
        this.$store.commit(`${this.$store.state.activeView}/filter`, '')
      }
    }
  }
</script>

<style lang="sass" scoped>
nav#sidebar
  position: fixed
  width: 200px
</style>

