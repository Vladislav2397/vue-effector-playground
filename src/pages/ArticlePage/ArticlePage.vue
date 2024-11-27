<template>
<transition name="fade" mode="out-in">
    <div v-if="!isLoading">
        <h2>{{article.title}}</h2>
        <ArticleContent />
        <router-link to="/articles/2">to second article</router-link>
    </div>
    <div v-else>
        Loading...
    </div>
</transition>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router"
import {useUnit} from "effector-vue/composition"
import ArticleContent from "./ArticleContent.vue"
import * as model from './model.ts'

const [isLoading, article] = useUnit([model.$isPending, model.$article])

const { params } = useRoute()
const articleId = params.articleId as string

model.pageMounted({ articleId })
</script>

<style scoped>

</style>