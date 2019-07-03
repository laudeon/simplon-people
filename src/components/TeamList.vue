<template>
  <people-list :list="team" people_type="Collaborateur⋅rice⋅s">
    <template v-slot:modal="slotProps">
      <ul>
        <li><i class="material-icons-outlined">map</i> {{ slotProps.people.district }}</li>
        <li><i class="material-icons-outlined">location_city</i> {{ slotProps.people.city }}</li>
        <li><i class="material-icons-outlined">check_circle_outline</i> {{ slotProps.people.activated | isSOCAccountActive }}</li>
      </ul>
    </template>
    <template v-slot:add>
      <section>
        <h1>
          Ajouter un⋅e collaborateur⋅rice
        </h1>
        <form @submit="addEmployee">
          <label for="firstname">Prénom</label>
          <input type="text" name="firstname" id="firstname" v-model="trainer.firstname">

          <label for="firstname">Prénom</label>
          <input type="text" name="lastname" id="lastname" v-model="trainer.lastname">
        </form>
      </section>
    </template>
  </people-list>
</template>

<script>
  import { mapState } from 'vuex'
  import PeopleList from './PeopleList'

  export default {
    name: 'team',
    data () {
      return {
        trainer: {
          firstname: '',
          lastname: '',
          district: '',
          skillsSet: '',
          simplonline: 0
        }
      }
    },
    computed: {
      ...mapState('team', {
        team: state => state.searched
      })
    },
    methods: {
      addEmployee () {
        
      }
    },
    components: { PeopleList }
  }
</script>
