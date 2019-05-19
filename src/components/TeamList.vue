<template>
  <section id="team">
    <p>{{ team.length }} collaborateur⋅rice⋅s</p>
      <section id="team-list" role="list">
        <article v-for="employee in team" :key="employee.id" :class="{partner: employee.partnership === 'Partenaire'}">
          <h1 v-on:click="showModal(employee.email)">{{ employee.firstname }} {{ employee.lastname }}</h1>
          <p><i class="material-icons">email</i> {{ employee.email }}</p>
          <modal :name="employee.email">
            <ul>
              <li><strong>email</strong> {{ employee.email }}</li>
              <li><strong>région</strong> {{ employee.district }}</li>
              <li><strong>fabrique</strong> {{ employee.city }} / {{ employee.partnership }}</li>
              <li><strong>Fonction / Poste</strong> {{ employee.role }}</li>
            </ul>
          </modal>
        </article>
      </section>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'team',
    computed: {
      ...mapState('team', {
        team: state => state.searched
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
  section#team  
    margin-left: 220px
    padding: 1rem 0 0 2rem
    background: #eeeeee

    > p
      text-align: left
      color: #929292
      font-size: .8rem
  
    section#team-list
      display: flex
      flex-wrap: wrap
      justify-content: space-evenly

      article
        flex-grow: 1
        max-width: 50%
        margin: 1rem 1rem
        padding: 1rem 2rem
        border: 1px solid #eeeeee
        text-align: left
        word-wrap: break-word
        box-shadow: 0 1px 1px rgba(0,0,0,.3)
        transition: .3s
        background: #ffffff

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

</style>

