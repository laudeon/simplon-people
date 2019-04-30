<template>
  <section id="team">
    <p>{{ team.length }} collaborateur⋅rice⋅s</p>
    <section id="team-list" role="list">
      <article v-for="employee in team" :key="employee.id">
        <h1>{{ employee.firstname }} {{ employee.lastname }}</h1>
        <ul>
          <li><strong>email</strong> {{ employee.email }}</li>
          <li><strong>région</strong> {{ employee.district }}</li>
          <li><strong>fabrique</strong> {{ employee.city }} / {{ employee.partnership }}</li>
          <li><strong>Poste / Rôle</strong> {{ employee.skillsSet }}</li>
        </ul>
      </article>
    </section>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'teamList',
    computed: {
      ...mapState('team', {
        team: state => state.filtered
      })
    }
  }
</script>

<style lang="sass" scoped>
  section#team  
    margin-left: 200px

    p
      text-align: left
      color: #929292
  
    section#team-list
      display: flex
      flex-wrap: wrap
      justify-content: space-evenly

      article
        flex-grow: 1
        max-width: calc(25% - 9rem)
        margin: 2rem 1rem
        padding: 1rem 2rem
        border: 1px solid #eeeeee
        text-align: left
        word-wrap: break-word
        box-shadow: 0 5px 15px rgba(0,0,0,.15)

        &:hover
          cursor: pointer


        h1
          font-size: 1.8rem
          text-transform: capitalize

        ul
          list-style: none
          padding: 0
          margin: 0

</style>

