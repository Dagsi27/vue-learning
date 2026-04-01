<script setup>
import {ref} from 'vue';
const { user } = defineProps({
  user: Object
})

const emit = defineEmits(['componentToggle'])

const toggle = () => {
  emit('componentToggle', user)
}

</script>

<template>
  <li>
    {{ user.name }} - {{ user.age }} years old
    <button @click="toggle">Show details</button>
  </li>
</template>