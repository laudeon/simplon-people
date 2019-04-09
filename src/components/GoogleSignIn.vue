<template>
  <section id="googleauth">
    <button id="google-signin" v-if="$store.state.me.logged === false" type="button" v-on:click="signIn">Sign in with my Simplon e-mail</button>
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
      }
    }
  }
</script>