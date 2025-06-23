<script setup>
import UIInput from "../ui/UIInput.vue";
import UIButton from "../ui/UIButton.vue";
const props = defineProps(["store"]);
</script>

<template>
  <header class="w-full max-w-md h-[40px] flex gap-2 mb-8 items-center">
    <UIInput
      v-model="store.albumIdsInput"
      placeholder="Введите ID альбомов через пробел"
    />

    <UIButton
      :loading="store.loading"
      :disabled="store.loading"
      @click="store.fetchPhotos"
      customClass="px-3 py-2 rounded border border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
    >
      Поиск
    </UIButton>

    <UIButton
      :title="store.theme === 'light' ? 'Светлая тема' : 'Тёмная тема'"
      @click="store.toggleTheme"
      customClass="ml-2 px-3 py-2 rounded border border-gray-300 dark:border-gray-700"
    >
      {{ store.theme === "light" ? "🌞" : "🌙" }}
    </UIButton>
  </header>
</template>
