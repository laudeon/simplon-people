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
    <template v-slot:add="slotProps">
      <button class="add" @click="showModal('addTrainer')">
        +
      </button>
    </template>
    <modal name="addTrainer" height="auto" width="70%">
      <form @submit="addTrainer">
        <input type="text" name="firstname" v-model="trainer.firstname">
        <input type="text" name="lastname" v-model="trainer.lastname">
      </form>
    </modal>
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
      showModal (payload) {
        this.$modal.show(payload)
      },

      addTrainer() {

      }
    },
    components: { PeopleList }
  }
</script>
