<template>
  <div>
    <button @click="useNuxtApp().$auth.signOut">ログアウト</button>
    <slot />
  </div>
</template>
