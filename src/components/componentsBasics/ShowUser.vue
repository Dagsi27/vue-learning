<script setup>
import ShowDetails from './ShowDetails.vue'

const { user } = defineProps({
  user: Object
})

const emit = defineEmits(['componentToggle'])

const toggle = () => {
  emit('componentToggle', user.name)
}
</script>

<template>
  <div class="user-row">
    <div class="cell">{{ user.name }}</div>
    <div class="cell">{{ user.age }}</div>
    <div class="cell"><button @click="toggle">Show details</button></div>
  </div>
</template>
<style scoped>
  .user-row {
    display: contents;
  }

  .cell {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
  }
</style>