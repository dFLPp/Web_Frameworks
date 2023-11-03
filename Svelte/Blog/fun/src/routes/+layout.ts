//Do msm jeito que +layout.svelte é comum a todos os components nesse direitorio e nos seus subdiretórios,
//+layout.ts também é, de modo que todas as páginas vão ter esse msm comportamento pre-loading e de transition

// export const prerender = false; (como eu criei uma api não tem como usar essa opção ao msm)

export const load = ({url}) => {
    return {path: url.pathname}
}

// com essa config, todas as páginas do site (devido ao esquema do +layout) vão ser carregadas no server antes de serem enviadas para o cliente
// dessa forma, o conteúdo que a pessoa vê no browser é estático (sem javascipt - vc pode até desabilitar ele)
// OBS: SSR, contudo, só é interessante para sites ou parte de sites que não tenham reatividade (não precisam de JS)