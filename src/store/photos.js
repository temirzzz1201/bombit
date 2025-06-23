import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const usePhotoStore = defineStore("photos", () => {
  const photos = ref([]);
  const filteredPhotos = ref([]);
  const loading = ref(false);
  const albumIdsInput = ref(localStorage.getItem("albumIdsInput") || "");
  const sortKey = ref("");
  const sortDirection = ref(1);
  const displayedCount = ref(30);
  const theme = ref(localStorage.getItem("theme") || "light");

  const sortedPhotos = computed(() => {
    if (!sortKey.value) return filteredPhotos.value;
    return [...filteredPhotos.value].sort((a, b) => {
      const valA = a[sortKey.value];
      const valB = b[sortKey.value];
      if (typeof valA === "string" && typeof valB === "string") {
        return valA.localeCompare(valB) * sortDirection.value;
      }
      return (valA - valB) * sortDirection.value;
    });
  });

  const visiblePhotos = computed(() => {
    return sortedPhotos.value.slice(0, displayedCount.value);
  });

  async function fetchPhotos() {
    loading.value = true;
    try {
      const ids = albumIdsInput.value.trim().split(/\s+/).filter(Boolean);
      let url = "https://jsonplaceholder.typicode.com/photos";
      if (ids.length) {
        const params = new URLSearchParams();
        ids.forEach((id) => params.append("albumId", id));
        url += "?" + params.toString();
      }
      const res = await axios.get(url);
      photos.value = res.data;
      filteredPhotos.value = res.data;
      displayedCount.value = 30;
      sortKey.value = "";
      sortDirection.value = 1;
      localStorage.setItem("albumIdsInput", albumIdsInput.value);
    } catch (e) {
      console.error(e);
      photos.value = [];
      filteredPhotos.value = [];
    } finally {
      loading.value = false;
    }
  }

  function loadMore() {
    if (displayedCount.value < filteredPhotos.value.length) {
      displayedCount.value += 30;
    }
  }

  function setSort(key) {
    if (sortKey.value === key) {
      sortDirection.value = -sortDirection.value;
    } else {
      sortKey.value = key;
      sortDirection.value = 1;
    }
    displayedCount.value = 30;
  }

  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme.value);
  }

  return {
    photos,
    filteredPhotos,
    albumIdsInput,
    sortKey,
    sortDirection,
    displayedCount,
    theme,
    loading,
    sortedPhotos,
    visiblePhotos,
    fetchPhotos,
    loadMore,
    setSort,
    toggleTheme,
  };
});
