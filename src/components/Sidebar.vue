<template>
  <nav id="sidebar">
    <h1>Simplon People</h1>
    <a v-on:click="switchList('trainers')" id="trainers-link" class="list-link active">Formateur⋅rice⋅s</a>
    <a v-on:click="switchList('coworkers')" id="coworkers-link" class="list-link">DIUT / CME / PP</a>
    <ul>
      <li v-for="district in districts" v-bind:key="district">
        <a v-on:click="toggleDistricts">{{ district }}</a>
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
      switchList (name) {
        const target = this.$el.querySelector('#' + name + '-link')
        const parent = target.parentElement
       
        parent.querySelectorAll('a.list-link').forEach(a => a.className = 'list-link')
        target.className = target.className + ' active'
        
        this.$store.commit('switchList', name)
      },
      toggleActive (target) {
        const parentUl = target.parentElement.parentElement

        if (target.className === 'active-district') {
          target.className = ''
          
          return
        }

        parentUl.querySelectorAll('li a').forEach(a => a.className = '')
        target.className = 'active-district'
      },
      toggleDistricts (e) {
        this.toggleActive(e.target)
        this.$store.commit(`toggleDistricts`, e.target.innerHTML.trim())
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
  min-width: 220px
  background: rgb(255,44,97)
  background: linear-gradient(180deg, rgba(206,0,51,1) 44%, rgba(162,0,41,1) 100%)
  color: #ffffff

  > h1
    height: 5rem
    margin: 0
    padding: 1.5rem
    background: #ffffff
    color: #ce0033
    font-size: 1.4rem
    text-align: center

  ul
    margin: 0
    padding: 0 0 0 1rem
    list-style: none
    

    li
      margin: 1rem 0
    
      &:hover
        cursor: pointer
    
      a
        position: relative
        display: block
        opacity: .9
        font-size: .9rem
        transition: .2s

        &::before
          content: ''
          display: block
          position: absolute
          top: .1rem
          left: -.5rem
          height: 1rem
          width: .1rem
          background: none
          transition: .2s

        &::after
          content: ''
          display: block
          position: absolute
          top: -.1rem
          right: .5rem
          height: 1.4rem
          width: 1.4rem
          border: 1px solid transparent
          border-radius: 50%
          text-align: center
          color: #ffffff
          transition: .2s

        &.active-district::before
          background: #ffffff
        
        &.active-district::after
          content: 'x'
          border-color: #ffffff
        
        &.active-district
          opacity: 1
  > a
    display: block
    padding: 1rem
    margin: .1rem 0
    background: rgba(255, 255, 255, 0)
    color: #ffffff
    font-weight: 700
    transition: .2s

    &:hover
      cursor: pointer

    &:active, &:focus
      outline: none
  
  > .active
      background: rgba(255, 255, 255, .2)
</style>

