<script setup>
import {ref} from "vue";
import UserItem from './User.vue'

const users = ref([
  { name: 'John Doe', age: 30, 'is-admin': true },
  { name: 'Anna', age: 25, 'is-admin': false },
  { name: 'Mike', age: 40, 'is-admin': false }
])

const selectedUser = ref(null)
const handleToggle = (user) => {
  selectedUser.value = user
}
</script>

<template>
  <ol v-if="users.length > 0">
    <UserItem
        v-for="user in users"
        :key="user.name"
        :user="user"
        @componentToggle="handleToggle"
    />
  </ol>
  <div v-if="selectedUser">
    <h2>Details:</h2>
    <p>Name: {{ selectedUser.name }}</p>
    <p>Age: {{ selectedUser.age }}</p>
    <p>Admin: {{ selectedUser.isAdmin ? "Yes" : "No" }}</p>
  </div>
</template>