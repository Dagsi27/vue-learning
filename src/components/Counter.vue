<script setup>
import { ref } from 'vue';

const todo = ref([]);
const newTodo = ref('');
let nextId = 1;

function addTodo(title) {
    if (!title) return;

    todo.value.push({
        id: nextId,
        title,
        isDone: false
    });

    nextId++;
    newTodo.value = '';
}
</script>

<template>
    <h1>Hello World</h1>
    <input type="text" v-model="newTodo" placeholder="title">
    <button @click="addTodo(newTodo)">Add Todo</button>

    <ol v-if="todo.length > 0">
        <li v-for="item in todo" :key="item.id">
            <span :class="{done: item.isDone}">{{ item.title }}</span>
            <input type="checkbox" v-model="item.isDone">
        </li>
    </ol>
    <p v-else>No todos yet</p>
</template>