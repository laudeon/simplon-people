<template>
  <section id="trainers">
    <p>{{ trainers.length }} formateurs</p>
    <section id="trainers-list" role="list">
      <article v-for="trainer in trainers" :key="trainer.id">
        <h1 v-on:click="showModal(trainer.email)">{{ trainer.firstname }} {{ trainer.lastname }}</h1>
        <p><strong>email</strong> {{ trainer.email }}</p>
        <modal :name="trainer.email">
          <h1>{{ trainer.firstname }} {{ trainer.lastname }}</h1>
          <ul>
            <li><strong>email</strong> {{ trainer.email }}</li>
            <li><strong>région</strong> {{ trainer.district }}</li>
            <li><strong>fabrique</strong> {{ trainer.city }} / {{ trainer.partnership }}</li>
            <li><strong>formation / technos</strong> {{ trainer.skillsSet }}</li>
          </ul>
        </modal>
      </article>
    </section>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'trainers',
    computed: {
      ...mapState('trainers', {
        trainers: state => state.filtered
      })
    },
    methods: {
      showModal (email) {
        this.$modal.show(email)
      }
    }
  }
</script>

<style lang="sass" scoped>
  section#trainers  
    margin-left: 220px
    padding: 1rem 0 0 2rem
    background: #eeeeee

    > p
      text-align: left
      color: #929292
      font-size: .8rem
  
    section#trainers-list
      display: flex
      flex-wrap: wrap
      justify-content: space-evenly
      padding-right: 3%

      article
        flex-grow: 1
        max-width: 50%
        margin: 1rem 1rem
        padding: 1rem 2rem
        border: 1px solid #eeeeee
        background: #ffffff
        text-align: left
        word-wrap: break-word
        box-shadow: 0 1px 1px rgba(0,0,0,.3)
        transition: .3s

        &:hover
          box-shadow: 0 5px 16px rgba(0,0,0,.25)

        h1
          font-size: 1.8rem
          text-transform: capitalize
          
          &:hover
            cursor: pointer

        ul
          list-style: none
          padding: 0
          margin: 0

        .v--modal-overlay .v--modal-box.v--modal ul
          padding: 2rem

</style>

