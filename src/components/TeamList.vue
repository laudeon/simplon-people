<template>
  <people-list :list="team" people_type="Collaborateur⋅rice⋅s">
    <template v-slot:modal="slotProps">
      <ul>
        <li><i class="material-icons-outlined">map</i> {{ slotProps.people.district }}</li>
        <li><i class="material-icons-outlined">location_city</i> {{ slotProps.people.city }}</li>
        <li><i class="material-icons-outlined">check_circle_outline</i> {{ slotProps.people.activated | isSOCAccountActive }}</li>
      </ul>
    </template>
  </people-list>
</template>

<script>
  import { mapState } from 'vuex'
  import PeopleList from './PeopleList'

  export default {
    name: 'team',
    computed: {
      ...mapState('team', {
        team: state => state.searched
      })
    },
    components: { PeopleList }
  }
</script>
