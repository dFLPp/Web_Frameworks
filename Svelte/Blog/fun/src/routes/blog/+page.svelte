<script>
  import Item from "../../lib/components/Item.svelte";
  export let data;
</script>

<h1>Blog home</h1>
<article>
  <p>
    Cada +page.svelte é a página do seu diretório. Ou seja, como esse arquivo é
    +page e está dentro de routes/blog é o arquivo que representa a página
    /blog. Agora para criar páginas para cada um dos posts (blog/1, blog/2, etc)
    vamos usar uma rota dinâmica, ao criar uma pasta com "[]"
  </p>
</article>

<div class="card-container">
  {#each data.posts as post}
    <Item metadata={post.metadata} link={post.urlPath} />
  {/each}
</div>

<div>Esses são os últimos 10 posts</div>
<div>Quer ver todos? Clique <a href="/blog/posts">aqui</a>.</div>

<style>
  .card-container {
    padding: 1em;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
  }

  article {
    text-align: justify;
    width: 500px;
    margin-bottom: 1em;
  }

  a {
    background-color: white;
    color: black;
  }
</style>
