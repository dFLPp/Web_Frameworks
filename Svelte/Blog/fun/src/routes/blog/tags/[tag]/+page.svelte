<script>
  import Item from "../../../../lib/components/Item.svelte";
  export let data;
  console.log(data);
</script>

<p>Esses são todos os posts que tem a tag <span>{data.tag}<span /></span></p>
<div class="card-container">
  {#each data.a as post}
    <Item metadata={post.metadata} link={post.urlPath} />
  {/each}
</div>
<p>voltar para o <a href="/blog">home</a></p>

<style>
  span {
    background-color: black;
    color: white;
  }
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
