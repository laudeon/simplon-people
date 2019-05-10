<template>
  <nav id="sidebar">
    <h1>Simplon People</h1>
    <a v-on:click="switchView('trainers')" id="trainers-link" class="view-link active">Formateur⋅rice⋅s</a>
    <a v-on:click="switchView('team')" id="team-link" class="view-link">DIUT / CME / PP</a>
    <ul>
      <li>
        <a v-on:click="all" class="active">Toutes régions</a>
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
        districts: state => state.districts,
      })
    },
    methods: {
      switchView (name) {
        const target = document.querySelector('#' + name + '-link')
        const parent = target.parentElement
       
        parent.querySelectorAll('a.view-link').forEach(a => a.className = 'view-link')
        target.className = target.className + ' active'
        
        this.$store.commit('switchView', name)
      },
      setActive (target) {
        const listElement = target.parentElement.parentElement
        listElement.querySelectorAll('li a').forEach(a => a.className = '')
        target.className = 'active'
      },
      filter (e) {
        this.setActive(e.target)

        this.$store.commit(`filter`, e.target.innerHTML.trim())
      },
      all (e) {
        this.setActive(e.target)
        
        this.$store.commit(`filter`, '')
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
    
      a
        position: relative
        display: block
        opacity: .9
        transition: .2s

        &::after
          content: ''
          display: block
          position: absolute
          top: .1rem
          left: -.5rem
          height: 1rem
          width: .1rem
          background: none
          transition: .2s

        &.active::after
          background: #ffffff
        
        &.active
          opacity: 1
  > a
    display: block
    padding: 1rem
    color: #ffffff
    font-weight: 700
    background: rgba(255, 255, 255, 0)
    text-decoration: none
    margin: .1rem 0
    transition: .2s

    &:hover
      cursor: pointer

    &:active, &:focus
      outline: none
  
  > .active
      background: rgba(255, 255, 255, .2)
</style>

