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
    <GoogleSingIn :callback="gSignInCallback" :status="logged" />
    <Searchbar v-if="logged === true" />
    <router-view v-if="logged === true" />
  </div>
</template>

<script>
  import './assets/normalize.css'
  import { mapState } from 'vuex'
  import Sidebar from '@/components/Sidebar.vue'
  import Searchbar from '@/components/Searchbar.vue'
  import GoogleSingIn from '@/components/GoogleSignIn.vue'

  export default {
    name: 'app',
    components: {
      Sidebar,
      Searchbar,
      GoogleSingIn
    },
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
            .then(client => 
              this.$store.dispatch('team/fetchTeam', client)
                .then(() => this.$store.dispatch('trainers/fetchTrainers', client))
            )
            .then(() => this.$store.commit('deduceDistricts'))
            .then(() => this.$root.$emit('stoploader'))
            .catch(error => {
              window.console.log(error)
              if (
                error.status === 401 ||
                error.status === 403
              ) {
                this.$store.commit('me/logged', false)
                this.$root.$emit('stoploader')
                this.flash('Votre session a expiré !', 'error')
              }
            })
        } else {
          this.$root.$emit('stoploader')
        }
      }
    }
  }
</script>


<style lang="sass">
*, *::after, *::before
  box-sizing: boder-box

/** Fix for the loader */
.vld-overlay .vld-background
  opacity: 1 !important

body
  padding: 2rem 0

#app
  font-family: 'Ubuntu', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #323232
  font-size: 1rem
  
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
</style>
