<template>
  <section id="trainers">
    <h1>Nos Formateurs</h1>
    <p>{{ trainers.length }} formateurs</p>
    <section id="trainers-list" role="list">
      <article v-for="trainer in trainers" :key="trainer.id">
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
  import { mapState } from 'vuex'

  export default {
    name: 'trainersList',
    computed: {
      ...mapState('trainers', {
        trainers: state => state.filtered
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

