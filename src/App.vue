<template>
  <div id="app">
    <flash-message></flash-message>
    
    <section id="intro" v-if="logged === false">
      <p>
        Qui c'est ? Où est-elle ? Qu'est-ce qu'il fait ?
      </p>
      <h1>Bienvue sur <strong>le répertoire des équipes de Simplon.</strong></h1>
    </section>
    
    <Sidebar v-if="logged === true" />
    
    <GoogleSingIn :callback="gSignInCallback" :logged="logged" />
    
    <Searchbar v-if="logged === true" />
    
    <transition name="component-fade">
      <keep-alive>
        <TeamList v-if="logged === true && $store.state.activeList === 'team'" />
        <TrainerList v-if="logged === true && $store.state.activeList === 'trainers'"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import './assets/normalize.css'
  import { mapState } from 'vuex'
  import Sidebar from '@/components/Sidebar.vue'
  import Searchbar from '@/components/Searchbar.vue'
  import GoogleSingIn from '@/components/GoogleSignIn.vue'
  import TeamList from '@/components/TeamList.vue'
  import TrainerList from '@/components/TrainerList.vue'

  export default {
    name: 'app',
    computed: {
      ...mapState({
        logged: state => state.me.logged, 
      })
    },
    created () {
      let loader = this.$loading.show()
      loader.hide()
      this.$root.$on('stoploader', () => {
        loader.hide()
      })
      this.$root.$on('showloader', () => {
        loader = this.$loading.show()
      })
    },
    methods: {
      gSignInCallback (status) {
        this.$store.commit('me/logged', status)
      }
    },
    watch: {
      logged(isLogged) {
        if (isLogged) {
          this.$root.$emit('showloader')
          this.$gapi._libraryInit('client')
            .then(client => Promise.all([
              this.$store.dispatch('team/fetchTeam', client),
              this.$store.dispatch('trainers/fetchTrainers', client)
            ]))
            .then(() => this.$root.$emit('stoploader'))
            .catch(error => {
              if (error.status >= 400) {
                this.$store.commit('me/logged', false)
                this.$root.$emit('stoploader')
                this.flash(this.$getErrorMessage(error.status), 'error')
              }
            })

          return
        }

        this.$root.$emit('stoploader')
      }
    },
    components: {
      Sidebar,
      Searchbar,
      GoogleSingIn,
      TeamList,
      TrainerList
    }
  }
</script>


<style lang="sass">
*, *::after, *::before
  box-sizing: border-box

body
  padding: 0

a
  text-decoration: none

ul
  list-style: none
  padding: 0
  margin: 0

#app
  font-family: 'Ubuntu', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #323232
  font-size: 1rem
  padding-bottom: 2rem
  
  
  // Home signout
  section#intro
    text-align: center
    margin: 20vh auto 6rem auto
    
    p
      color: #ce0033
      font-size: 1.5rem

    h1
      margin: 0
      font-size: 3rem
      font-weight: 200

// Fix for the loader
.vld-overlay .vld-background
  opacity: 1 !important

// Transition effect between components
.component-fade-enter-active, .component-fade-leave-active
  transition: opacity .3s
.component-fade-enter, .component-fade-leave-to, .component-fade-enter-active
  opacity: 0

// Fix material icon default UI
i.material-icons
  vertical-align: middle
  font-size: 1.2rem
  margin-right: .2rem

</style>
