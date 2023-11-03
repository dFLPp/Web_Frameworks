/*
O que acontece é o seguinte: 
Todos vez que você procura/entra/faz um GET para uma route no svelte, ele buscar pelo arquivo +page.js (no caso .ts)
esse arquivo é como se fosse um miniserver: ele pega dados do backend e envia eles (na forma de props) para o arquivo +page.svelte 
(que é basicamente um arquivo html estático quando não possui +page.js correspondente). Essa é a tal hydration.

Para enviar e carregar os dados dinamicamente no "frontend" vc precisa exportar uma função chamada de "load" (outra palavra reservada)

*/

export async function load({ params }) {
  const post = await import(`../posts/${params.slug}.md`);
  console.log(post);
  const { date, author, tags } = post.metadata;
  const content = post.default;

  return {
    content,
    date,
    author,
    tags,
  };
}

/*
O que acontece é o seguinte:
Se vc acessa /blog vc é servido com o conteúdo estático do +page.svelte dentro do /routes/blog
Se vc acessa /blog/* vc é servido com conteúdo dinâmico isso porque criamos dentro de /routes/blog uma basta com [] (slug não é nome reservado)
Ou seja c vc quiser criar uma rota dinâmica e, /page1, por exemplo, basta criar um pasta [bananas] e fazer o esquema

E o esquema é:
Quando a requisição chega paa /blog/x, por exemplo, a função load acima vai carregar o arquivo x, buscar as infos. e retornar algo para o "frontend"
E então o front end (placeholder/boilerplate) vai ser preenchido/hidradado com o conteúdo servido (+page.svelte dentro de [slug])
*/
