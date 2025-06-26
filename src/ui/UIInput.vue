<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    :disabled="disabled"
    :type="type"
    class="flex-grow px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  disabled: Boolean,
  type: Number,
});

defineEmits(["update:modelValue"]);
</script>
