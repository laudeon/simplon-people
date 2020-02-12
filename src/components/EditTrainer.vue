<template>
  <div>
    <header>
      <h1>
        Modifier les informations d'un⋅e formateur⋅rice
      </h1>
    </header>
    <section class="form">
      <TrainerForm :trainer="trainer" :submitHandler="editTrainer"/>
    </section>
  </div>
</template>

<script>
import TrainerForm from './TrainerForm'

export default {
    name: 'editTrainer',
    props: {
      trainer: {type: Object, default: () => ({})}
    },
    methods : {
      editTrainer(e) {
        e.preventDefault()

        this.$root.$emit('showloader')

        this.$gapi._libraryInit('client')
          .then(() => this.$gapi._libraryInit('client'))
          .then(client => 
            this.$store.dispatch('trainers/updateTrainer', { 
              gclient: client, 
              payload: {
                rawData: this.trainer,
                data: {
                  district: this.trainer.district,
                  city: this.trainer.city,
                  role: this.trainer.role,
                  lastname: this.trainer.lastname,
                  firstname: this.trainer.firstname,
                  email: this.trainer.email,
                  skillSet: this.trainer.skillSet
                }
              }
            })
          )
          .then(() => {
            this.$root.$emit('stoploader')
            this.$modal.hide('addFormateur⋅rice⋅s')
            this.flash('Modifié⋅e avec succès !', 'success')
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
