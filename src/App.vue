<script setup>
import { watch } from "vue";
import { usePhotoStore } from "./store/photos";
import AppHeader from "./components/AppHeader.vue";
import PhotoTable from "./components/PhotoTable.vue";

const store = usePhotoStore();

watch(
  () => store.theme,
  (val) => {
    document.documentElement.classList.toggle("dark", val === "dark");
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4"
  >
    <app-header :store="store" />
    <photo-table />
  </div>
</template>
