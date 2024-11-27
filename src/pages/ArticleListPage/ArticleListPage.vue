<template>
<div :class="styles.root">
    <h1>ArticleList page</h1>
    <router-link :to="{ name: 'Home' }">To home</router-link>
    <transition name="fade" mode="out-in">
        <p v-if="isLoading">Loading...</p>
        <template v-else>
            <div :class="styles.list">
                <p>total: {{ response.total }}</p>
                <router-link
                    v-for="article in list"
                    :key="article.id"
                    :to="`/articles/${article.id}`">
                    <ArticleRow
                        :article="article"
                    />
                </router-link>
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

.list {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>