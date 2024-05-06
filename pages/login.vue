<script setup lang="ts">
const { $auth } = useNuxtApp();
</script>

<template>
  login
  <button @click="$auth.login">login</button>
  <button @click="$auth.logout">logout</button>
</template>
