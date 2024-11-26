import {createEffect, createEvent, createStore, sample} from "effector"
import {articleApi, ArticleItem} from "./api"
import {createGate, useGate} from "effector-vue/composition"

export const ArticleListPageGate = createGate()

export const getListFx = createEffect(articleApi.getList)

export const pageMounted = createEvent()

export const $response = createStore<any>(null)
export const $list = createStore<ArticleItem[]>([])

export const $isPending = getListFx.pending

sample({
    clock: pageMounted,
    target: getListFx,
})
sample({
    clock: getListFx.doneData,
    fn: response => response.list,
    target: $list,
})
sample({
    clock: getListFx.doneData,
    target: $response,
})

export const useArticleListPageGate = () => useGate(ArticleListPageGate, () => ({}))