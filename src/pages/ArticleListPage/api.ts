export type Article = {
    id: number
    title: string
    description: string
    content: string
}
export type ArticleItem = Omit<Article, 'content'>

const articles: Article[] = [
    {
        id: 1,
        title: 'post 1',
        description: 'description for post 1',
        content: 'content for post 1',
    },
    {
        id: 2,
        title: 'post 2',
        description: 'description for post 2',
        content: 'content for post 2',
    },
    {
        id: 3,
        title: 'post 3',
        description: 'description for post 3',
        content: 'content for post 3',
    },
]

export const articleApi = {
    getList: async (): Promise<{ list: ArticleItem[], total: number }> => {
        await delay(2000)

        return {
            list: articles.map(({ content, ...post }) => post),
            total: articles.length
        }
    },
    getItem: async ({ id }: { id: number }) => {
        await delay(2000)

        return articles.find(item => item.id === id)
    }
}

function delay(ms = 2000) {
    return new Promise<void>(resolve => {
        const timeout = setTimeout(() => {
            resolve()
            clearTimeout(timeout)
        }, ms)
    })
}