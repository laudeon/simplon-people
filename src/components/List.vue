<template>
  <section class="people">
    <p>{{ listLength }} {{ peopleType }}</p>
    
    <keep-alive>
      <section class="people-list trainers" role="list" v-if="activeList == 'trainers'">
        <Trainer v-for="trainer in trainers" :key="trainer.id" :trainer="trainer"/>
      </section>
    </keep-alive>

    <keep-alive>
      <section class="people-list coworkers" role="list" v-if="activeList == 'coworkers'">
        <Coworker v-for="coworker in coworkers" :key="coworker.id" :coworker="coworker"/>
      </section>
    </keep-alive>

    <div class="button-add">
      <button class="add" @click="$modal.show(`add${peopleType}`)">
        +
      </button>
      <modal :name="'add'+peopleType" height="auto" width="70%">
        <AddTrainer v-if="activeList == 'trainers'"/>
        <AddCoworker v-if="activeList == 'coworkers'"/>
      </modal>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  import Trainer from './Trainer'
  import AddTrainer from './AddTrainer'
  import Coworker from './Coworker'
  import AddCoworker from './AddCoworker'

  const TRAINERS_LIST_NAME = 'Formateur⋅rice⋅s'
  const COWORKERS_LIST_NAME = 'Collaborateur⋅rice⋅s'

  export default {
    name: 'list',
    props: {
      activeList: { type: String, default: 'trainers' },
    },
    computed: {
      ...mapState('trainers', {
        trainers: state => state.searched,
      }),
      ...mapState('coworkers', {
        coworkers: state => state.searched,
      }),
      peopleType () {
        return this.activeList === 'trainers' ? TRAINERS_LIST_NAME : COWORKERS_LIST_NAME
      },
      listLength () {
        return this.activeList === 'trainers' ? this.trainers.length : this.coworkers.length
      }
    },
    components: {
      Trainer,
      Coworker,
      AddTrainer,
      AddCoworker
    }
  }
</script>

<style lang="sass">
  section.people  
    margin-left: 220px
    padding: 1rem 0 0 2rem
    background: #eeeeee
    position: relative

    > p
      text-align: left
      color: #929292
      font-size: .8rem

    > div.button-add
        position: fixed
        bottom: 1rem
        right: 1rem

        button.add
          background: #ce0033
          border: none
          outline: none
          width: 3rem
          height: 3rem
          border-radius: 100%
          text-align: center
          color: #ffffff
          font-size: 3rem
          line-height: 0
          padding-bottom: .5rem
          box-shadow: 1px 1px 10px rgba(0,0,0,.2)
          transition: .2s

          &:hover
            cursor: pointer
            box-shadow: 1px 1px 10px rgba(0,0,0,.5)

  
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
        background: #ffffff
        text-align: left
        word-wrap: break-word
        box-shadow: 0 1px 1px rgba(0,0,0,.3)
        transition: .3s

        &:hover
          box-shadow: 0 5px 16px rgba(0,0,0,.25)

        h1
          font-size: 1.8rem
          text-transform: capitalize
          
          &:hover
            cursor: pointer
          
          small
            font-size: 1.2rem
            font-weight: normal
            color: #ce0033

        li
          line-height: 2rem

  .v--modal-overlay .v--modal-box.v--modal div.modal-container
      display: flex

      section
        flex-grow: 1
        margin: 2rem

        &.name
          min-width: 40%
          border-right: 1px solid #ce0033
      
      h1
        margin: 0
  
  section.form form button
    padding: .5rem 1rem
    border: 1px solid #ce0033
    background: none
    border-radius: 3px
    color: #ce0033

    &:hover
      cursor: pointer

  // Transition effect between components
  .component-fade-enter-active, .component-fade-leave-active
    transition: opacity .3s
  .component-fade-enter, .component-fade-leave-to, .component-fade-enter-active
    opacity: 0
</style>
