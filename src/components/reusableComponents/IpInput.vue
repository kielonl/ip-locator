<template>
  <input v-model="value" :type="type" />
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  value?: string;
  type: "text" | "number";
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.value,
  set: (value: any) => emit("update:modelValue", value),
});
</script>

<style scoped lang="scss">
input {
  padding: 1rem;
  margin: 1rem 0;
  width: 30%;
  border-radius: 1rem 0 0 1rem;
  font-size: 18px;
  border: none;
}
</style>
