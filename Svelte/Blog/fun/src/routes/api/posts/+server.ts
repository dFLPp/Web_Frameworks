
// vamos trabalhar agora com svelte routes, que são tipo endpoints de uma API
// As convenções são: chamar de server, escrever com o "+" na frente e ser .js ou .ts, ter um verbo HTTP para cada função que for executar
// Nesse caso como ele vai ser um GET endpoint só precisa ter uma função que lida com GET
// Eles retornam data ao invés de HTML, e as funções precisam exportar algo


import { fetchPosts } from '../../../lib/utils/index'
import { json } from '@sveltejs/kit'

export const GET = async ({url}) => {
    // como um endpoint que se preze retorna uma response
    const allPosts = await fetchPosts(Number(url.searchParams.get('lim')))
    // @ts-ignore
    const sortedPosts = allPosts?.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    return json(sortedPosts)
}
