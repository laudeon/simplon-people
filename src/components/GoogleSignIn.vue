<template>
  <section id="googleauth">
    <button id="google-signin" v-if="$store.state.me.logged === false" type="button" v-on:click="signIn">Se connecter avec Google</button>
    <button id="google-signout" v-if="$store.state.me.logged === true" type="button" v-on:click="signOut">Sign out</button>
  </section>
</template>

<script>
  export default {
    name: 'googleauth',
    created () {
      this.$gapi.isSignedIn()
        .then(result => {
          this.$store.commit('me/signIn', result)
        })
    },
    methods: {
      signIn () {
        this.$gapi.signIn()
          .then( () => {
            this.$store.commit('me/signIn', true)
            this.$root.$emit('signedin')
          })
          .catch(window.console.error)
      },
      signOut () {
        this.$gapi.signOut()
          .then( () => {
            this.$store.commit('me/signIn', false)
          })
          .catch(window.console.error)
      },

    }
  }
</script>

<style lang="sass" scoped>
  button#google-signin
    height: 3rem
    margin-left: calc(50vw - 111px)
    background: url('../assets/g-logo.png') no-repeat 3% center
    background-size: auto 60%
    padding-left: 3rem
    border: none
    border-radius: 2px
    outline: none
    color: #757575
    box-shadow: 0 1px 2px #cecece
    font-size: 1rem
    transition: .2s

    &:hover
      cursor: pointer
      box-shadow: 0 1px 6px #dedede

    &:focus
      outline: none
    
    &::-moz-focus-inner
      border: none
</style>
