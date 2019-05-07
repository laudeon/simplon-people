<template>
  <nav id="sidebar">
    <h1>Simplon People</h1>
    <router-link to="/">Formateur⋅rice⋅s</router-link>
    <router-link to="/team">Team</router-link>
    <ul>
      <li>
        <a v-on:click="all">Toutes régions</a>
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
  background: rgb(255,44,97)
  background: linear-gradient(180deg, rgba(206,0,51,1) 44%, rgba(162,0,41,1) 100%)
  color: #ffffff

  > h1
    background: #ffffff
    margin: 0
    color: #ce0033
    height: 5rem
    padding: 1.5rem
    text-align: center
    font-size: 1.4rem

  ul
    list-style: none
    margin: 0
    padding: 0 0 0 1rem
    

    li
      margin: 1rem 0
    
      &:hover
        cursor: pointer
  >a
    display: block
    padding: 1rem
    color: #ffffff
    font-weight: 700
    text-decoration: none
    margin: .1rem 0
</style>

