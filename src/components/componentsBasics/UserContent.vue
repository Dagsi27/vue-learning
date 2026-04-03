<script setup>
import ShowDetails from './ShowDetails.vue'
import ShowUser from './ShowUser.vue'
import {ref} from "vue";
const { user } = defineProps({
  user: Object
})

const isExpanded = ref(null)

const setUserId = (id) => {
  isExpanded.value = (isExpanded.value === id) ? null : id;
}
</script>

<template>
  <ShowUser
    :user="user"
    @componentToggle="setUserId"
  />
  <ShowDetails
      :user="user"
      :isVisible = "isExpanded"
  />
</template>