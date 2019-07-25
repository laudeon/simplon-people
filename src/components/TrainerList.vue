<template>
  <people-list :list="trainers" people_type="Formateur⋅rice⋅s">
    <template v-slot:modal="slotProps">
      <ul>
        <li><i class="material-icons-outlined">map</i> {{ slotProps.people.district }}</li>
        <li><i class="material-icons-outlined">location_city</i> {{ slotProps.people.city }}</li>
        <li><i class="material-icons-outlined">assignment</i> {{ slotProps.people.status }}</li>
        <li><i class="material-icons-outlined">devices</i> {{ slotProps.people.simplonline | hasSimplonline }}</li>
        <li><i class="material-icons-outlined">check_circle_outline</i> {{ slotProps.people.soc | isSOCAccountActive }}</li>
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
              <label for="firstname">Prénom *</label>
              <input type="text" name="firstname" id="firstname" v-model="trainer.firstname" required>
            </div>

            <div class="form-bloc">
              <label for="lastname">Nom *</label>
              <input type="text" name="lastname" id="lastname" v-model="trainer.lastname" required>
            </div>

            <div class="form-bloc">
              <label for="district">Région *</label>
              <input type="text" name="district" id="district" v-model="trainer.district" required>
            </div>

            <div class="form-bloc">
              <label for="city">Fabrique *</label>
              <input type="text" name="city" id="city" v-model="trainer.city" required>
            </div>

            <div class="form-bloc">
              <label for="role">Fonction *</label>
              <input type="text" name="role" id="role" v-model="trainer.role" required>
            </div>

            <div class="form-bloc">
              <label for="email">Email *</label>
              <input type="email" name="email" id="email" v-model="trainer.email" required>
            </div>

            <div class="form-bloc">
              <label for="skillsSet">Référentiel / Technos *</label>
              <input type="text" name="skillsSet" id="skillsSet" v-model="trainer.skillsSet" required>
            </div>

            <div class="form-bloc">
              <label for="simplonline">Accès Simplonline</label>
              <input type="checkbox" name="simplonline" id="simplonline" v-model="trainer.simplonline">
            </div>

            <div class="form-bloc">
              <label for="soc">Autorisation plateforme SOC</label>
              <input type="text" name="soc" id="soc" v-model="trainer.soc">
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
        let rowNumber
        e.preventDefault()

        this.$root.$emit('showloader')

        this.$gapi._libraryInit('client')
          .then(client => this.$store.dispatch('trainers/fetchTrainers', client))
          .then(() => rowNumber = (this.all.length+2))
          .then(() => this.$gapi._libraryInit('client'))
          .then(client => 
            this.$store.dispatch('trainers/addTrainer', { 
              gclient: client, 
              payload: this.trainer, 
              rowNumber 
            })
          )
          .then(() => this.$gapi._libraryInit('client'))
          .then(client =>
            this.$store.dispatch('trainers/addBackgroundToRow', { 
              gclient: client, 
              rowNumber, 
              color: {
                "red": 1,
                "green": 1,
                "blue": 0
              }
            })
          )
          .then(() => {
            this.$root.$emit('stoploader')
            this.$modal.hide('addFormateur⋅rice⋅s')
            this.flash('Ajouté⋅e avec succès !', 'success')
          })
          .catch(error => {
            this.$root.$emit('stoploader')
            if (error.status >= 400) {
              this.flash(this.$getErrorMessageFromCode(error.status), 'error')
            } else {
              this.flash(this.$getErrorMessage(error), 'error')
            }
          })
      }
    },
    components: { PeopleList }
  }
</script>
