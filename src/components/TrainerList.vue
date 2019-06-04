<template>
  <people-list :list="trainers" people-type="Formateur⋅rice⋅s">
    <template v-slot:default="slotProps">
      <ul>
        <li><i class="material-icons-outlined">map</i> {{ slotProps.people.district }}</li>
        <li><i class="material-icons-outlined">location_city</i> {{ slotProps.people.city }}</li>
        <li><i class="material-icons-outlined">assignment</i> {{ slotProps.people.status }}</li>
        <li><i class="material-icons-outlined">devices</i> {{ slotProps.people.simplonline | hasSimplonline }}</li>
        <li><i class="material-icons-outlined">check_circle_outline</i> {{ slotProps.people.activated | isSOCAccountActive }}</li>
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
