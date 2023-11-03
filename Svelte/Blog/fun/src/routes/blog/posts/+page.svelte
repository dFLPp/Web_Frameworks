<script>
  import Item from "../../../lib/components/Item.svelte";
  export let data;
</script>

<h1>Aqui estão todos os posts do blog</h1>

<div class="card-container">
  {#each data.posts as post}
    <Item metadata={post.metadata} link={post.urlPath} />
  {/each}
</div>

<div>Voltar ao <a href="/blog">blog</a>.</div>

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
  a {
    background-color: white;
    color: black;
  }
</style>
