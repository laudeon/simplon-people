<template>
  <div>
    <header>
      <h1>
        Ajouter un⋅e collaborateur⋅rice
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
  </div>
</template>

<script>
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
          skillsSet: '',
          simplonline: 0
        }
      }
    },
    methods : {
      addCoworker(e) {
        let rowNumber
        e.preventDefault()

        this.$root.$emit('showloader')

        this.$gapi._libraryInit('client')
          .then(client => this.$store.dispatch('coworkers/fetchCoworkers', client))
          .then(() => rowNumber = (this.all.length+2))
          .then(() => this.$gapi._libraryInit('client'))
          .then(client => 
            this.$store.dispatch('coworkers/addCoworker', { 
              gclient: client, 
              payload: this.trainer, 
              rowNumber 
            })
          )
          .then(() => this.$gapi._libraryInit('client'))
          .then(client =>
            this.$store.dispatch('coworkers/addBackgroundToRow', { 
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
            this.$modal.hide('addCollaborateur⋅rice⋅s')
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
    }
  }
</script>