<template>
<div v-if="article.content">
    <p>{{article.content}}</p>
</div>
</template>

<script setup lang="ts">
import {useUnit} from "effector-vue/composition"

import * as model from './model'

const [article] = useUnit([model.$article])
</script>

<style scoped>

</style>