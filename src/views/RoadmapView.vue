<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen w-full overflow-x-hidden bg-[#0b1326] text-[#dae2fd] font-['Inter']">
    <header class="sticky top-0 z-50 flex w-full items-center justify-between bg-[#0b1326] px-6 py-4">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-[#69dca4]">terminal</span>
        <span class="text-xl font-bold tracking-tighter text-[#69dca4] font-['Space_Grotesk']">
          Fullstack Blueprint
        </span>
      </div>
      <!-- avatar intentionally removed -->
    </header>

    <main class="mx-auto max-w-lg px-4 pb-32 md:px-8">
      <section class="mt-8 mb-10">
        <h1 class="mb-4 text-3xl font-bold leading-tight tracking-tight font-['Space_Grotesk']">
          Vue 3 + TailwindCSS + Pinia + TypeScript: Szybki Plan Nauki Fullstack
        </h1>
        <p class="mb-6 text-sm leading-relaxed text-[#bdcabf]">
          Przewodnik architektoniczny pozwalający opanować nowoczesny stack frontendowy i integrację z backendem w
          14 dni.
        </p>

        <div class="relative overflow-hidden rounded-xl border border-[#3d4a42]/20 bg-[#131b2e] p-4">
          <div class="mb-2 flex items-center justify-between">
            <span class="text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-slate-400"
              >Total Progress</span
            >
            <span class="text-xs font-bold text-[#69dca4] font-['JetBrains_Mono']">4 / 7 Stages (57%)</span>
          </div>
          <div class="h-1.5 w-full overflow-hidden rounded-full bg-[#171f33]">
            <div
              class="h-full w-[57%] rounded-full bg-gradient-to-r from-[#69dca4] to-[#42b883] shadow-[0_0_8px_#69dca4]"
            ></div>
          </div>
        </div>
      </section>

      <!-- Target Stack / Tech Ecosystem -->
      <section class="mb-12">
        <div class="mb-4 flex items-center gap-2">
          <span class="text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-slate-500">Tech Ecosystem</span>
          <div class="h-px flex-1 bg-[#3d4a42]/10"></div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="flex items-center gap-3 rounded-xl bg-[#171f33] p-4">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#42b883]/10">
              <span class="material-symbols-outlined text-xl text-[#69dca4]">bolt</span>
            </div>
            <span class="text-xs font-medium font-['JetBrains_Mono']">Vue 3</span>
          </div>

          <div class="flex items-center gap-3 rounded-xl bg-[#171f33] p-4">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#005fac]/20">
              <span class="material-symbols-outlined text-xl text-[#a4c9ff]">palette</span>
            </div>
            <span class="text-xs font-medium font-['JetBrains_Mono']">TailwindCSS</span>
          </div>

          <div class="flex items-center gap-3 rounded-xl bg-[#171f33] p-4">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1eb0ea]/20">
              <span class="material-symbols-outlined text-xl text-[#7bd0ff]">database</span>
            </div>
            <span class="text-xs font-medium font-['JetBrains_Mono']">Pinia</span>
          </div>

          <div class="flex items-center gap-3 rounded-xl bg-[#171f33] p-4">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c3daff]/10">
              <span class="material-symbols-outlined text-xl text-[#c3daff]">code</span>
            </div>
            <span class="text-xs font-medium font-['JetBrains_Mono']">TypeScript</span>
          </div>
        </div>
      </section>

      <!-- Learning Stages -->
      <section class="relative mb-12">
        <div class="absolute left-6 top-4 bottom-4 -z-10 w-px bg-[#3d4a42]/20"></div>

        <div class="space-y-6">
          <div class="flex gap-4">
            <div
              class="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#69dca4] shadow-[0_0_15px_rgba(105,220,164,0.4)]"
            >
              <span class="material-symbols-outlined font-bold text-[#002112]">check</span>
            </div>
            <div class="w-full rounded-xl bg-[#171f33] p-5 border-l-2 border-[#69dca4]">
              <span class="mb-1 block text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#69dca4]"
                >Dzień 1-2</span
              >
              <h3 class="mb-2 text-lg font-bold">
                Etap 1: Fundamenty <span class="font-['JetBrains_Mono'] text-[#69dca4]/80">Vue 3</span>
              </h3>
              <p class="text-sm text-[#bdcabf]">Composition API, ref, reactive, v-if/v-for.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#69dca4] shadow-[0_0_15px_rgba(105,220,164,0.4)]"
            >
              <span class="material-symbols-outlined font-bold text-[#002112]">check</span>
            </div>
            <div class="w-full rounded-xl bg-[#171f33] p-5 border-l-2 border-[#69dca4]">
              <span class="mb-1 block text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#69dca4]"
                >Dzień 3-4</span
              >
              <h3 class="mb-2 text-lg font-bold">Etap 2: Komponenty + struktura</h3>
              <p class="text-sm text-[#bdcabf]">Propsy, Emity, Lifecycle Hooks.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#69dca4] shadow-[0_0_15px_rgba(105,220,164,0.4)]"
            >
              <span class="material-symbols-outlined font-bold text-[#002112]">check</span>
            </div>
            <div class="w-full rounded-xl bg-[#171f33] p-5 border-l-2 border-[#69dca4]">
              <span class="mb-1 block text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#69dca4]"
                >Dzień 5</span
              >
              <h3 class="mb-2 text-lg font-bold">
                Etap 3: Vite + <span class="font-['JetBrains_Mono'] text-[#69dca4]/80">TailwindCSS</span>
              </h3>
              <p class="text-sm text-[#bdcabf]">Konfiguracja środowiska, Utility-first CSS.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#69dca4] shadow-[0_0_15px_rgba(105,220,164,0.4)]"
            >
              <span class="material-symbols-outlined font-bold text-[#002112]">check</span>
            </div>
            <div class="w-full rounded-xl bg-[#171f33] p-5 border-l-2 border-[#69dca4]">
              <span class="mb-1 block text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#69dca4]"
                >Dzień 6</span
              >
              <h3 class="mb-2 text-lg font-bold">Etap 4: Routing (Vue Router)</h3>
              <p class="text-sm text-[#bdcabf]">Widoki, nawigacja, dynamiczne parametry.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#87948a]/30 bg-[#171f33]">
              <span class="text-xs font-['JetBrains_Mono'] text-[#87948a]">05</span>
            </div>
            <div class="w-full rounded-xl bg-[#222a3d] p-5 border-l-2 border-[#a4c9ff]">
              <div class="mb-1 flex items-start justify-between">
                <span class="block text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#a4c9ff]"
                  >Dzień 7-9</span
                >
                <span class="rounded-full bg-[#a4c9ff]/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter text-[#a4c9ff]"
                  >Current Stage</span
                >
              </div>
              <h3 class="mb-2 text-lg font-bold">
                Etap 5: <span class="font-['JetBrains_Mono'] text-[#a4c9ff]">Pinia</span> + TS
              </h3>
              <p class="text-sm text-[#bdcabf]">Global State Management, typowanie stanu.</p>
            </div>
          </div>

          <div class="flex gap-4 opacity-40">
            <div class="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#87948a]/30 bg-[#171f33]">
              <span class="text-xs font-['JetBrains_Mono'] text-[#87948a]">06</span>
            </div>
            <div class="w-full rounded-xl bg-[#171f33] p-5">
              <span class="mb-1 block text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-slate-500"
                >Dzień 10</span
              >
              <h3 class="mb-2 text-lg font-bold">Etap 6: <span class="font-['JetBrains_Mono']">TypeScript</span></h3>
              <p class="text-sm text-[#bdcabf]">Interfejsy, typowanie generyczne.</p>
            </div>
          </div>

          <div class="flex gap-4 opacity-40">
            <div class="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#87948a]/30 bg-[#171f33]">
              <span class="text-xs font-['JetBrains_Mono'] text-[#87948a]">07</span>
            </div>
            <div class="w-full rounded-xl bg-[#171f33] p-5">
              <span class="mb-1 block text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-slate-500"
                >Dzień 11-14</span
              >
              <h3 class="mb-2 text-lg font-bold">Etap 7: Real Fullstack Project</h3>
              <p class="text-sm text-[#bdcabf]">Integracja API, CRUD, Deployment.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Errors & Recommendations -->
      <section class="mb-12 grid grid-cols-1 gap-4">
        <div class="rounded-2xl border border-[#ffb4ab]/10 bg-[#93000a]/10 p-6">
          <div class="mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-[#ffb4ab]">warning</span>
            <h2 class="text-lg font-bold font-['Space_Grotesk']">Najczęstsze błędy</h2>
          </div>
          <ul class="space-y-3 text-sm text-[#bdcabf]">
            <li class="flex gap-2">
              <span class="font-bold text-[#ffb4ab]">•</span>
              <span>Używanie Options API w nowym projekcie Vue 3.</span>
            </li>
            <li class="flex gap-2">
              <span class="font-bold text-[#ffb4ab]">•</span>
              <span>Zbyt wczesna implementacja Pinia (overengineering).</span>
            </li>
            <li class="flex gap-2">
              <span class="font-bold text-[#ffb4ab]">•</span>
              <span>Ignorowanie ostrzeżeń TypeScript ('any' everywhere).</span>
            </li>
          </ul>
        </div>

        <div class="relative overflow-hidden rounded-2xl bg-[#171f33] p-6">
          <div class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#69dca4]/10 blur-3xl"></div>
          <div class="mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-[#69dca4]">lightbulb</span>
            <h2 class="text-lg font-bold font-['Space_Grotesk']">Rekomendacje</h2>
          </div>
          <div class="space-y-4">
            <div class="rounded-lg bg-[#060e20] p-3 border-l-2 border-[#69dca4]">
              <p class="text-xs leading-relaxed text-[#bdcabf] font-['JetBrains_Mono']">
                Systematycznie korzystaj z <span class="text-[#69dca4]">Laravel</span> jako backendu API dla pełnej
                integracji Fullstack.
              </p>
            </div>

            <div class="grid gap-3">
              <RouterLink
                to="/counter"
                class="flex w-full items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-[#69dca4] to-[#42b883] px-4 py-3 text-sm font-bold text-[#002112] shadow-[0_4px_20px_rgba(105,220,164,0.3)] transition active:scale-95"
              >
                <span>Przejdź do Counter</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </RouterLink>

              <RouterLink
                to="/list"
                class="flex w-full items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-[#a4c9ff] to-[#005fac] px-4 py-3 text-sm font-bold text-[#001c39] shadow-[0_4px_20px_rgba(164,201,255,0.25)] transition active:scale-95"
              >
                <span>Przejdź do List</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="mb-24 flex w-full flex-col items-center justify-center gap-4 bg-[#0b1326] py-12">
      <div class="flex gap-6">
        <a class="text-xs text-slate-500 transition-colors hover:text-[#a4c9ff] font-['JetBrains_Mono']" href="#"
          >Documentation</a
        >
        <a class="text-xs text-slate-500 transition-colors hover:text-[#a4c9ff] font-['JetBrains_Mono']" href="#"
          >Changelog</a
        >
        <a class="text-xs text-slate-500 transition-colors hover:text-[#a4c9ff] font-['JetBrains_Mono']" href="#"
          >Support</a
        >
      </div>
      <span class="text-xs text-slate-500 font-['JetBrains_Mono']">© 2024 Architect Docs</span>
    </footer>
  </div>
</template>

