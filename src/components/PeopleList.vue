<template>
  <section class="people">
    <p>{{ list.length }} {{ people_type }}</p>
    
    <section class="people-list" role="list">
      <article v-for="people in list" :key="people.id">
        <h1 @click="$modal.show(people.lastname+people.firstname)">
          {{ people.firstname }} {{ people.lastname }}
          <br><small>{{ people.role }}</small>
        </h1>
        <p><i class="material-icons-outlined">email</i> {{ people.email }}</p>
        <p><i class="material-icons-outlined">location_city</i> {{ people.city }} - <small>{{ people.partnership }}</small></p>
        
        <modal :name="people.lastname+people.firstname" height="auto" width="70%">
          <div class="modal-container">
            <section class="name">
              <h1>
                {{ people.firstname }} {{ people.lastname }}
                <br><small>{{ people.role }}</small>
              </h1>
              <p><i class="material-icons-outlined">email</i> {{ people.email }}</p>
            </section>
            
            <section class="more-info">
              <slot name="modal" v-bind:people="people"></slot>
            </section>
          </div>
        </modal>
      </article>
    </section>
    <div class="button-add">
      <button class="add" @click="$modal.show(`add${people_type}`)">
        +
      </button>
      <modal :name="'add'+people_type" height="auto" width="70%">
        <slot name="add"></slot>
      </modal>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'peopleList',
    props: {
      list: { type: Array, default: () => [] },
      people_type: { type: String, default: 'People' }
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

</style>
