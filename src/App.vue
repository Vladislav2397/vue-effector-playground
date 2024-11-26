<script setup lang="ts">
//
</script>

<template>
<router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
        <Component :is="Component" :key="route.fullPath" />
    </transition>
</router-view>
</template>

<style>
body {
    font-family: sans-serif;
    padding-left: 20px;
    padding-right: 20px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
<style src="@/shared/styles/reset.css" />