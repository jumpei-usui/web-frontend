<script setup lang="ts">
definePageMeta({ layout: false });
</script>

<template>
  <div>
    ログインページ
    <button
      @click="
        useNuxtApp().$auth.signInWithRedirect({
          provider: { custom: 'EntraID' },
        })
      "
    >
      ログイン
    </button>
  </div>
</template>
