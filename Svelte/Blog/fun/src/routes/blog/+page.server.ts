// tipo, vendo de fora é meio estranho, mas acabei de fazer a api com o GET
// então agora vou carregar os posts dinamicamente na home page do blog

//Para isso vamos usar, é claro, a função load, mas é importante saber que:
//ela roda no server e serve para filtrar/separar o que o front end vai vomitar na tela
//tem 3 params que podem ser desconstruidos: url, params, e fetch

//Tecnicamente falando esse arquivo roda tanto no client quanto no server side, contudo nele
//não deve existir nenhuma referencia ao documento (body, querySelector, etc)

//Se você quiser garantir que esse código só rode no server, renome-o para +page.server.ts
//nesse caso a função fetch, funciona nativamente e não precisa ser descontruida como param. (como ocorre aqui)

export const load = async ({fetch}) => {
    const requisicao = await fetch('/api/posts?lim=10')
    const resposta = await requisicao.json()
    return {posts: resposta}
}