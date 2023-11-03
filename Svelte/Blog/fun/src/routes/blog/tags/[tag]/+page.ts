// dê uma olhada no obj que o load recebe com param. tem varias coisas nele, contudo o mais útil é:
// fetch, params e url


export const load = async ({fetch, params}) => {
    const { tag } = params
    const allPosts = await fetch("/api/posts")
    let a = await allPosts.json()
    a = a.filter((elem: { metadata: { tags: any[] } }) => {
        return elem.metadata.tags.includes(tag)
        
    })
    return {
        tag,
        a
    }
}
