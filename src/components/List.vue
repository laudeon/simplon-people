<template>
  <section class="people">
    <p>{{ trainers.length }} formateurs</p>
    <section class="people-list" role="list">
      <article v-for="trainer in trainers" :key="trainer.id" :class="{partner: trainer.partnership === 'Partenaire'}">
        <h1 v-on:click="showModal(trainer.email)">{{ trainer.firstname }} {{ trainer.lastname }}</h1>
        <p><i class="material-icons">email</i> {{ trainer.email }}</p>
        <p><i class="material-icons">location_city</i> {{ trainer.city }}</p>
        <modal :name="trainer.email" height="auto" width="70%">
          <div class="modal-container">
            <section class="name">
              <h1>{{ trainer.firstname }} {{ trainer.lastname }}</h1>
              <p><i class="material-icons">email</i> {{ trainer.email }}</p>
            </section>
            <section class="more-info">
              <ul>
                <li><i class="material-icons">map</i> {{ trainer.district }}</li>
                <li><i class="material-icons">location_city</i> {{ trainer.city }}</li>
                <li><i class="material-icons">category</i> {{ trainer.skillsSet }}</li>
              </ul>
            </section>
          </div>
        </modal>
      </article>
    </section>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'trainers',
    computed: {
      ...mapState('trainers', {
        trainers: state => state.searched
      })
    },
    methods: {
      showModal (email) {
        this.$modal.show(email)
      }
    }
  }
</script>

<style lang="sass" scoped>
  section.people  
    margin-left: 220px
    padding: 1rem 0 0 2rem
    background: #eeeeee

    > p
      text-align: left
      color: #929292
      font-size: .8rem
  
    section.people-list
      display: flex
      flex-wrap: wrap
      justify-content: space-evenly
      padding-right: 3%

      article
        flex-grow: 1
        max-width: 50%
        margin: 1rem 1rem
        padding: 1rem 2rem
        border: 1px solid #eeeeee
        border-top: 2px solid #ce0033
        background: #ffffff
        text-align: left
        word-wrap: break-word
        box-shadow: 0 1px 1px rgba(0,0,0,.3)
        transition: .3s

        &.partner
          border-top: 2px solid #929292

        &:hover
          box-shadow: 0 5px 16px rgba(0,0,0,.25)

        h1
          font-size: 1.8rem
          text-transform: capitalize
          
          &:hover
            cursor: pointer

        ul
          list-style: none
          padding: 0
          margin: 0

          li
            line-height: 2rem

        .v--modal-overlay .v--modal-box.v--modal
          div.modal-container
            display: flex

            section
              flex-grow: 1
              margin: 2rem

              &.name
                min-width: 40%
                border-right: 1px solid #ce0033
            
            h1
              margin: 0

</style>
