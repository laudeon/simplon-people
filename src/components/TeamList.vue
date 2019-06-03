<template>
  <people-list :list="team" people-type="Collaborateur⋅rice⋅s">
    <template v-slot:default="slotProps">
      <ul>
        <li><i class="material-icons-outlined">map</i> {{ slotProps.people.district }}</li>
        <li><i class="material-icons-outlined">location_city</i> {{ slotProps.people.city }}</li>
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
