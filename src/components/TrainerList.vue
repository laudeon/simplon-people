<template>
  <section id="trainers">
    <h1>Nos Formateurs</h1>
    <p>{{ $store.state.trainers.filtered.length }} formateurs</p>
    <section id="trainers-list" role="list">
      <article v-for="trainer in $store.state.trainers.filtered" :key="trainer.id">
        <h1>{{ trainer.firstname }} {{ trainer.lastname }}</h1>
        <ul>
          <li><strong>email</strong> {{ trainer.email }}</li>
          <li><strong>région</strong> {{ trainer.district }}</li>
          <li><strong>fabrique</strong> {{ trainer.city }} / {{ trainer.partnership }}</li>
          <li><strong>formation / technos</strong> {{ trainer.skillsSet }}</li>
        </ul>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'trainersList',
  created () {
    // If user is already signed in
    this.$gapi.isSignedIn()
      .then( () => this.$gapi._libraryInit('client'))
      .then(client => this.$store.dispatch('trainers/fetchTrainers', client))
      .then(() => this.$root.$emit('stopLoader'))
      .catch(window.console.error)
    
    // On root event: signed in
    this.$root.$on('signedin', function () {
      this.$gapi._libraryInit('client')
        .then(client => this.$store.dispatch('trainers/fetchTrainers', client))
        .then(() => {
          this.$root.$emit('stopLoader')
        })
    })
  }
}
</script>

<style lang="sass" scoped>
section#trainers-list
  display: flex
  flex-wrap: wrap

  article
    flex-grow: 1
    max-width: calc(25% - 9rem)
    margin: 2rem
    padding: 1rem 2rem
    border: 1px solid #eeeeee
    text-align: left
    word-wrap: break-word
    box-shadow: 0 5px 15px rgba(0,0,0,.15)

    h1
      font-size: 1.8rem
      text-transform: capitalize

    ul
      list-style: none
      padding: 0
      margin: 0

</style>

