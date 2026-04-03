<script setup>
import {ref} from "vue";
import UserContent from './UserContent.vue'

const users = ref([
  { name: 'John Doe', age: 30, 'is-admin': true },
  { name: 'Anna', age: 25, 'is-admin': false },
  { name: 'Mike', age: 40, 'is-admin': false },
])

</script>

<template>
  <div class="content">
    <div class="grid" v-if="users.length > 0">
      <div class="header">Name</div>
      <div class="header">Age</div>
      <div class="header">Details</div>
      <UserContent
          v-for="user in users"
          :key="user.name"
          :user="user"
      />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.header {
  background-color: #f8f9fa;
  color: #334155;
  font-weight: bold;
  padding: 12px;
  border-bottom: 2px solid #dee2e6;
  text-transform: uppercase;
  font-size: 0.85rem;
}
</style>