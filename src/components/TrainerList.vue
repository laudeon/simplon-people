<template>
  <people-list :list="trainers" people_type="Formateur⋅rice⋅s">
    <template v-slot:modal="slotProps">
      <ul>
        <li><i class="material-icons-outlined">map</i> {{ slotProps.people.district }}</li>
        <li><i class="material-icons-outlined">location_city</i> {{ slotProps.people.city }}</li>
        <li><i class="material-icons-outlined">assignment</i> {{ slotProps.people.status }}</li>
        <li><i class="material-icons-outlined">devices</i> {{ slotProps.people.simplonline | hasSimplonline }}</li>
        <li><i class="material-icons-outlined">check_circle_outline</i> {{ slotProps.people.activated | isSOCAccountActive }}</li>
      </ul>
    </template>
    <template v-slot:add>
        <header>
          <h1>
            Ajouter un⋅e formateur⋅rice
          </h1>
        </header>
        <section class="form">
          <form @submit="addTrainer">
            <div class="form-bloc">
              <label for="firstname">Prénom</label>
              <input type="text" name="firstname" id="firstname" v-model="trainer.firstname">
            </div>

            <div class="form-bloc">
              <label for="firstname">Nom</label>
              <input type="text" name="lastname" id="lastname" v-model="trainer.lastname">
            </div>

            <div class="form-bloc">
              <button type="submit">Ajouter</button>
            </div>
          </form>
        </section>
    </template>
  </people-list>
</template>

<script>
  import { mapState } from 'vuex'
  import PeopleList from './PeopleList'

  export default {
    name: 'trainers',
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
      ...mapState('trainers', {
        trainers: state => state.searched
      })
    },
    methods : {
      addTrainer() {

      }
    },
    components: { PeopleList }
  }
</script>
