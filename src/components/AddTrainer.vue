<template>
  <div>
    <header>
      <h1>
        Ajouter un⋅e formateur⋅rice
      </h1>
    </header>
    <section class="form">
      <TrainerForm :trainer="trainer" :submitHandler="addTrainer"/>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TrainerForm from './TrainerForm'

export default {
    name: 'addTrainer',
    data () {
      return {
        trainer: {
          district: '',
          city: '',
          role: '',
          lastname: '',
          firstname: '',
          email: '',
          skillSet: ''
        }
      }
    },
    computed: {
      ...mapState('trainers', {
        all: state => state.all,
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
            this.$modal.hide('addFormateur⋅rice⋅s')
            if (error.status >= 400) {
              this.flash(this.$getErrorMessageFromCode(error.status), 'error')
            } else {
              this.flash(this.$getErrorMessage(error), 'error')
            }
          })
      }
    },
    components: {
      TrainerForm
    }
  }
</script>

<style lang="sass" scoped>
  .v--modal-box.v--modal > div
    padding: 4em
</style>
