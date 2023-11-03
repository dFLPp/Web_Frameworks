export const load = async ({fetch}) => {
    const requisicao = await fetch('/api/posts')
    const resposta = await requisicao.json()
    return {posts: resposta}
}