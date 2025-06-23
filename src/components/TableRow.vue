<script setup>
const props = defineProps(["photo"]);
</script>

<template>
  <tr
    class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <td class="p-2 truncate" :title="photo.id">{{ photo.id }}</td>
    <td class="p-2 truncate" :title="photo.albumId">{{ photo.albumId }}</td>
    <td class="p-2 truncate" v-tooltip="photo.title">{{ photo.title }}</td>
    <td class="p-2 truncate" :title="photo.url">
      <a
        class="text-blue-600 dark:text-blue-400 hover:underline"
        :href="photo.url"
        target="_blank"
        >{{ photo.url }}</a
      >
    </td>
    <td class="p-2 truncate" :title="photo.thumbnailUrl">
      <a
        class="text-blue-600 dark:text-blue-400 hover:underline"
        :href="photo.thumbnailUrl"
        target="_blank"
        >{{ photo.thumbnailUrl }}</a
      >
    </td>
  </tr>
</template>
