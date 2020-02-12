<template>
  <form @submit="submitHandler">
    <div class="form-bloc">
      <label for="firstname">Prénom *</label><br>
      <input type="text" name="firstname" id="firstname" v-model="trainer.firstname" required>
    </div>

    <div class="form-bloc">
      <label for="lastname">Nom *</label><br>
      <input type="text" name="lastname" id="lastname" v-model="trainer.lastname" required>
    </div>

    <div class="form-bloc">
      <label for="district">Région *</label><br>
      <input type="text" name="district" id="district" v-model="trainer.district" required>
    </div>

    <div class="form-bloc">
      <label for="city">Fabrique *</label><br>
      <input type="text" name="city" id="city" v-model="trainer.city" required>
    </div>

    <div class="form-bloc">
      <label for="role">Fonction *</label><br>
      <input type="text" name="role" id="role" v-model="trainer.role" required>
    </div>

    <div class="form-bloc">
      <label for="email">Email *</label><br>
      <input type="email" name="email" id="email" v-model="trainer.email" required>
    </div>

    <div class="form-bloc">
      <label for="skillsSet">Référentiel / Technos *</label><br>
      <input type="text" name="skillsSet" id="skillsSet" v-model="trainer.skillSet" required>
    </div>
    
    <div class="form-bloc">
      <button type="submit">Valider</button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'TrainerForm',
    props: {
      trainer: { type: Object, default: () => ({}) },
      submitHandler: { type: Function, default: () => {} }
    }
  }
</script>

<style lang="sass" scoped>
  form
    display: flex
    flex-wrap: wrap

    div.form-bloc
      flex-grow: 1
      width: 30%
      margin: 1%

    button
      padding: .5rem 1rem
      border: 1px solid #ce0033
      background: none
      border-radius: 3px
      color: #ce0033

      &:hover
        cursor: pointer
</style>