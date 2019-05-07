<template>
  <section id="googleauth">
    <button id="google-signin" v-if="status === false" type="button" v-on:click="signIn">Se connecter avec Google</button>
    <button id="google-signout" v-if="status === true" type="button" v-on:click="signOut">Se déconnecter</button>
  </section>
</template>

<script>
  export default {
    name: 'googleauth',
    props: {
      callback: Function,
      status: Boolean
    },
    created () {
      this.$gapi.isSignedIn()
        .then(result => this.callback(result))
        .catch(window.console.error)
    },
    methods: {
      signIn () {
        this.$gapi.signIn()
          .then(() => this.callback(true))
          .catch(window.console.error)
      },
      signOut () {
        this.$gapi.signOut()
          .then(() => this.callback(false))
          .catch(window.console.error)
      }
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
    transition: .3s

    &:hover
      cursor: pointer
      box-shadow: 0 1px 8px #cecece

    &:focus
      outline: none
    
    &::-moz-focus-inner
      border: none

  button#google-signout
    position: absolute
    right: 2rem
    top: 1.2rem
    background: #ffffff
    border: 1px solid #cecece
    border-radius: 3px
    padding: .8rem 1rem
    outline: none
    color: #757575
    font-size: .8rem
    transition: .3s

    &:hover
      cursor: pointer
      border: 1px solid #ce0033
      color: #ce0033

    &:focus
      outline: none
    
    &::-moz-focus-inner
      border: none
</style>
