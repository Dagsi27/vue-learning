<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-50 flex items-center justify-between bg-slate-950/80 px-6 py-4 backdrop-blur">
      <div class="flex items-center gap-3">
        <span class="text-emerald-300">terminal</span>
        <span class="text-xl font-bold tracking-tight text-emerald-300">Fullstack Blueprint</span>
      </div>
      <!-- avatar intentionally removed -->
    </header>

    <main class="mx-auto max-w-lg px-4 pb-24 pt-8 md:px-8">
      <h1 class="text-3xl font-bold leading-tight tracking-tight">
        Vue 3 + TailwindCSS: strona startowa projektów
      </h1>
      <p class="mt-3 text-sm leading-relaxed text-slate-300">
        To jest hub, który prowadzi do Twoich ćwiczeń: Counter i List.
      </p>

      <div class="mt-8 grid gap-3">
        <RouterLink
          to="/counter"
          class="rounded-xl border border-slate-700/50 bg-slate-900 px-5 py-4 transition hover:bg-slate-800"
        >
          <div class="text-xs uppercase tracking-widest text-slate-400">Projekt</div>
          <div class="mt-1 text-lg font-semibold">Counter</div>
        </RouterLink>

        <RouterLink
          to="/list"
          class="rounded-xl border border-slate-700/50 bg-slate-900 px-5 py-4 transition hover:bg-slate-800"
        >
          <div class="text-xs uppercase tracking-widest text-slate-400">Projekt</div>
          <div class="mt-1 text-lg font-semibold">List</div>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

