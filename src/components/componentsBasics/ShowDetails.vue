<script setup>

const { user, isVisible } = defineProps({
  user: Object,
  isVisible: String

})

</script>

<template>
  <div class="details-row" v-if="isVisible === user.name">
    <div class="details-content">
      <h3>Details:</h3>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Age:</strong> {{ user.age }}</p>
      <p><strong>Admin:</strong> {{ user['is-admin'] ? "Yes" : "No" }}</p>
    </div>
  </div>
</template>
<style scoped>

  .details-row {
    grid-column: 1 / -1;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
    padding: 20px;
  }
</style>