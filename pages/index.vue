<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const id = ref(0);
const query = ref<string | null>("");
const inputId = ref(1);
const inputQuerry = ref("");

const fetchData = async () => {
  const response = await $fetch<{ item_id: number; q: string | null }>(
    `items/${inputId.value}`,
    {
      method: "GET",
      query: { q: inputQuerry.value },
      baseURL: runtimeConfig.public.apiBase,
    }
  );
  id.value = response.item_id;
  query.value = response.q;
};
</script>

<template>
  <div>
    <input v-model="inputId" />
    <input v-model="inputQuerry" />
    <button @click="fetchData">Fetch ID</button>
  </div>
  <div>{{ id }}</div>
  <div>{{ query }}</div>
</template>
