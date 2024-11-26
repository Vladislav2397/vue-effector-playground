<template>
<div :class="styles.root">
    <h1>ArticleList page</h1>
    <router-link :to="{ name: 'Home' }">To home</router-link>
    <transition name="fade" mode="out-in">
        <p v-if="isLoading">Loading...</p>
        <template v-else>
            <div>
                <p>total: {{ response.total }}</p>
                <ArticleRow
                    v-for="article in list"
                    :article="article"
                />
            </div>
        </template>
    </transition>
</div>
</template>

<script setup lang="ts">
import {useUnit} from "effector-vue/composition"

import ArticleRow from "@/entities/article/ui/ArticleRow.vue"

import * as model from "./model.ts"

model.pageMounted()

const [isLoading, response, list] = useUnit([model.$isPending, model.$response, model.$list])

</script>

<style module="styles">
.root {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>