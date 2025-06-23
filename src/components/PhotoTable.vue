<script setup>
import { onMounted, ref } from "vue";
import { usePhotoStore } from "../store/photos";
import TableHeader from "./TableHeader.vue";
import TableRow from "./TableRow.vue";

const store = usePhotoStore();
const tableContainer = ref(null);

function onScroll() {
  const el = tableContainer.value;
  if (!el) return;

  if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
    store.loadMore();
  }
}

onMounted(() => {
  store.fetchPhotos();
});
</script>

<template>
  <div
    ref="tableContainer"
    @scroll="onScroll"
    class="max-w-[600px] max-h-[600px] overflow-y-scroll border border-gray-300 dark:border-gray-700 rounded shadow bg-white dark:bg-gray-800"
  >
    <table class="w-full table-fixed border-collapse">
      <table-header :store="store" />
      <tbody>
        <table-row
          v-for="photo in store.visiblePhotos"
          :key="photo.id"
          :photo="photo"
        />
        <tr v-if="store.loading">
          <td
            colspan="5"
            class="p-4 text-center text-gray-500 dark:text-gray-400"
          >
            Загрузка...
          </td>
        </tr>
        <tr v-if="!store.loading && store.photos.length === 0">
          <td
            colspan="5"
            class="p-4 text-center text-gray-500 dark:text-gray-400"
          >
            Нет данных
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
