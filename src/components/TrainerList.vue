<template>
  <people-list :list="trainers" people-type="Formateur⋅rice⋅s">
    <template v-slot:default="slotProps">
      <ul>
        <li><i class="material-icons">map</i> {{ slotProps.people.district }}</li>
        <li><i class="material-icons">location_city</i> {{ slotProps.people.city }}</li>
        <li><i class="material-icons">category</i> {{ slotProps.people.skillsSet }}</li>
        <li><i class="material-icons">assignment</i> {{ slotProps.people.status }}</li>
        <li><i class="material-icons">devices</i> {{ slotProps.people.simplonline }}</li>
        <li><i class="material-icons">check_circle_outline</i> {{ slotProps.people.activated }}</li>
      </ul>
    </template>
  </people-list>
</template>

<script>
  import { mapState } from 'vuex'
  import PeopleList from './PeopleList'

  export default {
    name: 'trainers',
    computed: {
      ...mapState('trainers', {
        trainers: state => state.searched
      })
    },
    components: { PeopleList }
  }
</script>
