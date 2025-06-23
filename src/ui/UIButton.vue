<template>
  <button
    :class="customClass"
    :disabled="disabled"
    :title="title"
    @click="$emit('click')"
    class="cursor-pointer"
  >
    <slot v-if="!loading" />
    <svg
      v-else
      class="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  loading: Boolean,
  disabled: Boolean,
  title: String,
  customClass: {
    type: String,
    default: "",
  },
});

defineEmits(["click"]);
</script>
