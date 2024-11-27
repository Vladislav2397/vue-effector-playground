import {createEffect, createEvent, createStore, sample} from "effector"
import {articleApi} from "@/pages/ArticleListPage/api.ts"

type PageState = {
    articleId: string
}

export const getArticleByIdFx = createEffect(articleApi.getItem)

export const pageMounted = createEvent<PageState>()

export const $article = createStore({
    id: 0,
    title: '',
    description: '',
    content: '',
})

export const $isPending = getArticleByIdFx.pending

sample({
    clock: pageMounted,
    fn: ({ articleId }) => ({ id: +articleId }),
    target: getArticleByIdFx,
})
sample({
    clock: getArticleByIdFx.doneData,
    filter: Boolean,
    target: $article,
})
