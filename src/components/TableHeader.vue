<script setup>
const props = defineProps(["store"]);
</script>

<template>
  <thead
    class="sticky top-0 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 cursor-pointer select-none"
  >
    <tr>
      <th
        class="p-2 border-r border-gray-300 dark:border-gray-700 w-[50px]"
        @click="store.setSort('id')"
        :title="
          'Ид - сортировка ' +
          (store.sortKey === 'id'
            ? store.sortDirection === 1
              ? '↑'
              : '↓'
            : '')
        "
      >
        ИД
      </th>
      <th
        class="p-2 border-r border-gray-300 dark:border-gray-700 w-[80px]"
        @click="store.setSort('albumId')"
        :title="
          'Альбом - сортировка ' +
          (store.sortKey === 'albumId'
            ? store.sortDirection === 1
              ? '↑'
              : '↓'
            : '')
        "
      >
        Альбом
      </th>
      <th
        class="p-2 border-r border-gray-300 dark:border-gray-700"
        @click="store.setSort('title')"
        :title="
          'Название - сортировка ' +
          (store.sortKey === 'title'
            ? store.sortDirection === 1
              ? '↑'
              : '↓'
            : '')
        "
      >
        Название
      </th>
      <th
        class="p-2 border-r border-gray-300 dark:border-gray-700 w-[200px]"
        @click="store.setSort('url')"
        :title="
          'Ссылка - сортировка ' +
          (store.sortKey === 'url'
            ? store.sortDirection === 1
              ? '↑'
              : '↓'
            : '')
        "
      >
        Ссылка
      </th>
      <th
        class="p-2 w-[120px]"
        @click="store.setSort('thumbnailUrl')"
        :title="
          'Миниатюра - сортировка ' +
          (store.sortKey === 'thumbnailUrl'
            ? store.sortDirection === 1
              ? '↑'
              : '↓'
            : '')
        "
      >
        Миниатюра
      </th>
    </tr>
  </thead>
</template>
