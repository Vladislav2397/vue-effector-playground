<template>
<div :class="styles.root">
    <h5>{{ props.article.title }}</h5>
    <p>{{ props.article.description }}</p>
</div>
</template>

<script setup lang="ts">
const props = defineProps<{
    article: { id: number, title: string, description: string }
}>()
</script>

<style module="styles">
.root {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>