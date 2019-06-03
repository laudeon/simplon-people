<template>
  <section class="people">
    <p>{{ list.length }} {{ people_type }}</p>
    
    <section class="people-list" role="list">
      <article v-for="people in list" :key="people.id">
        <h1 v-on:click="showModal(people.email)">
          {{ people.firstname }} {{ people.lastname }}
          <br><small>{{ people.role }}</small>
        </h1>
        <p><i class="material-icons-outlined">email</i> {{ people.email }}</p>
        <p><i class="material-icons-outlined">location_city</i> {{ people.city }} - <small>{{ people.partnership }}</small></p>
        
        <modal :name="people.email" height="auto" width="70%">
          <div class="modal-container">
            <section class="name">
              <h1>
                {{ people.firstname }} {{ people.lastname }}
                <br><small>{{ people.role }}</small>
              </h1>
              <p><i class="material-icons-outlined">email</i> {{ people.email }}</p>
            </section>
            
            <section class="more-info">
              <slot v-bind:people="people"></slot>
            </section>
          </div>
        </modal>
      </article>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'peopleList',
    props: {
      list: { type: Array, default: () => [] },
      people_type: { type: String, default: 'People' }
    },
    methods: {
      showModal (email) {
        this.$modal.show(email)
      }
    }
  }
</script>

<style lang="sass">
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
