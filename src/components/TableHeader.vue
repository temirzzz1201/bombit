<script setup>
const props = defineProps(["store"]);

console.log(props.store.sortKey);
</script>

<template>
  <thead
    class="sticky top-0 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 cursor-pointer select-none"
  >
    <tr>
      <th
        class="p-2 border-r border-gray-300 dark:border-gray-700 whitespace-nowrap relative"
        @click="store.setSort('id')"
        :title="'Ид - сортировка '"
      >
        ИД
        <span class="absolute text-2xl bottom-2 pl-1.5">
          {{
            store.sortKey === "id"
              ? store.sortDirection === 1
                ? "↑"
                : "↓"
              : ""
          }}
        </span>
      </th>
      <th
        class="p-2 border-r border-gray-300 dark:border-gray-700 whitespace-nowrap relative"
        @click="store.setSort('albumId')"
        :title="'Альбом - сортировка '"
      >
        Альбом
        <span class="absolute text-2xl bottom-2 pl-1.5">
          {{
            store.sortKey === "albumId"
              ? store.sortDirection === 1
                ? "↑"
                : "↓"
              : ""
          }}
        </span>
      </th>
      <th
        class="p-2 border-r border-gray-300 dark:border-gray-700 whitespace-nowrap relative"
        @click="store.setSort('title')"
        :title="'Название - сортировка '"
      >
        Название
        <span class="absolute text-2xl bottom-2 pl-1.5">
          {{
            store.sortKey === "title"
              ? store.sortDirection === 1
                ? "↑"
                : "↓"
              : ""
          }}
        </span>
      </th>
      <th
        class="p-2 border-r border-gray-300 dark:border-gray-700 whitespace-nowrap relative"
        @click="store.setSort('url')"
        :title="'Ссылка - сортировка '"
      >
        Ссылка
        <span class="absolute text-2xl bottom-2 pl-1.5">
          {{
            store.sortKey === "url"
              ? store.sortDirection === 1
                ? "↑"
                : "↓"
              : ""
          }}
        </span>
      </th>
      <th
        class="p-2 whitespace-nowrap relative block mr-2"
        @click="store.setSort('thumbnailUrl')"
        :title="'Миниатюра - сортировка '"
      >
        Миниатюра
        <span class="absolute text-2xl bottom-2 pl-1.5">
          {{
            store.sortKey === "thumbnailUrl"
              ? store.sortDirection === 1
                ? "↑"
                : "↓"
              : ""
          }}
        </span>
      </th>
    </tr>
  </thead>
</template>
