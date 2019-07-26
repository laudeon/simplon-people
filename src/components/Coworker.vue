<template>
  <article>
    <h1 @click="$modal.show(coworker.lastname+coworker.firstname)">
      {{ coworker.firstname }} {{ coworker.lastname }}
      <br><small>{{ coworker.role }}</small>
    </h1>
    <p><i class="material-icons-outlined">email</i> {{ coworker.email }}</p>
    <p><i class="material-icons-outlined">location_city</i> {{ coworker.city }} - <small>{{ coworker.partnership }}</small></p>
    
    <modal :name="coworker.lastname+coworker.firstname" height="auto" width="70%">
      <div class="modal-container">
        <section class="name">
          <h1>
            {{ coworker.firstname }} {{ coworker.lastname }}
            <br><small>{{ coworker.role }}</small>
          </h1>
          <p><i class="material-icons-outlined">email</i> {{ coworker.email }}</p>
        </section>
        
        <section class="more-info">
          <ul>
            <li><i class="material-icons-outlined">map</i> {{ coworker.district }}</li>
            <li><i class="material-icons-outlined">location_city</i> {{ coworker.city }}</li>
            <li><i class="material-icons-outlined">check_circle_outline</i> {{ coworker.soc | isSOCAccountActive }}</li>
          </ul>
        </section>
      </div>
    </modal>
  </article>
</template>

<script>
  export default {
    name: 'coworker',
    props: {
      coworker: { type: Object, default: () => {} }
    }
  }
</script>
