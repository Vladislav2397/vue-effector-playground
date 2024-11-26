<template>
<div :class="styles.root">
    <h1>Home page</h1>
    <router-link :to="{ name: 'ArticleList' }">To articles</router-link>
</div>
</template>

<script setup lang="ts">

</script>

<style module="styles">
.root {
    /**/
}
</style>