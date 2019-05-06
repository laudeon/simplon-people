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
      all () {
        this.$store.commit(`${this.$store.state.activeView}/filter`, '')
      }
    }
  }
</script>

<style lang="sass" scoped>
nav#sidebar
  position: fixed
  top: 0
  bottom: 0
  left: 0
  width: 220px
  background: white
  box-shadow: 0 4px 10px rgba(0, 0, 0, .15)
  border-right: 1px solid #eeeeee

  ul
    list-style: none
    margin: 0
    padding: 0 0 0 1rem

    li
      margin: 1rem 0
    
      &:hover
        cursor: pointer
  >a
    display: inline-block
    padding: 1rem
</style>

