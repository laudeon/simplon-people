<template>
  <article>
    <h1 @click="$modal.show(trainer.lastname+trainer.firstname)">
      {{ trainer.firstname }} {{ trainer.lastname }}
      <br><small>{{ trainer.skillSet }}</small>
    </h1>
    <p><i class="material-icons-outlined">email</i> {{ trainer.email }}</p>
    <p><i class="material-icons-outlined">location_city</i> {{ trainer.city }} - <small>{{ trainer.partnership }}</small></p>
    
    <modal :name="trainer.lastname+trainer.firstname" height="auto" width="70%">
      <div class="modal-container">
        <section class="name">
          <h1>
            {{ trainer.firstname }} {{ trainer.lastname }}
            <br><small>{{ trainer.skillSet }}</small>
          </h1>
          <p>{{ trainer.role }}</p>
          <p><i class="material-icons-outlined">email</i> {{ trainer.email }}</p>
          <p><i class="material-icons-outlined">person_add</i> {{ trainer.discord }}</p>
        </section>
        
        <section class="more-info">
          <ul>
            <li><i class="material-icons-outlined">map</i> {{ trainer.district }}</li>
            <li><i class="material-icons-outlined">location_city</i> {{ trainer.city }} - <small>{{ trainer.partnership }}</small></li>
            <li><i class="material-icons-outlined">assignment</i> {{ trainer.status }}</li>
            <li><i class="material-icons-outlined">devices</i> {{ trainer.simplonline | hasSimplonline }}</li>
            <li><i class="material-icons-outlined">check_circle_outline</i> {{ trainer.soc | isSOCAccountActive }}</li>
          </ul>
          
          <div class="button-edit">
            <button class="edit" @click="$modal.show(`editTrainer`)">Modifier</button>
            <modal :name="'editTrainer'" height="auto" width="70%">
              <EditTrainer :trainer="{...trainer}" />
            </modal>
          </div>
        </section>
      </div>
    </modal>
  </article>
</template>

<script>
  import EditTrainer from './EditTrainer'

  export default {
    name: 'trainer',
    props: {
      trainer: { type: Object, default: () => ({}) }
    },
    components: {
      EditTrainer
    }
  }
</script>
