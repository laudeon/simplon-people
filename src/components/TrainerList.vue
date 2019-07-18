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
          district: '',
          city: '',
          role: '',
          lastname: '',
          firstname: '',
          email: '',
          skillsSet: '',
          simplonline: 0
        }
      }
    },
    computed: {
      ...mapState('trainers', {
        trainers: state => state.searched,
        all: state => state.all
      })
    },
    methods : {
      addTrainer(e) {
        e.preventDefault()
        const rowNumber = (this.all.length+2)
        this.$gapi._libraryInit('client', { discoveryDocs: [ 'https://sheets.googleapis.com/$discovery/rest' ]})
            .then(client => this.$store.dispatch('trainers/addTrainer', { gclient: client, payload: this.trainer, rowNumber }))
            .catch(error => {
              if (error.status >= 400) {
                this.flash(this.$getErrorMessage(error.status), 'error')
              }
            })
      }
    },
    components: { PeopleList }
  }
</script>
