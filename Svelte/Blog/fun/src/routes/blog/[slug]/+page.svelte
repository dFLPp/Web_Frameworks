<script>  export let data;
  console.log(data.content)
  //pode parecer contra intuitivo, mas esse export é são os dados enviados pelo "backend" (+page.js)
</script>


<article>
  <div class="info-section">
    <div class="info-item">
      <span class="icon">📅</span>
      <span class="text">Publication Date: {data.date}</span>
    </div>
    <div class="info-item">
      <span class="icon">😀</span>
      <span class="text">Author: {data.author}</span>
    </div>
    <div class="info-item">
      <span class="icon">🏷️</span>
      <span class="text"
        >Tags:
        {#each data.tags as tag}
          <a href={"/blog/tags/" + tag}>{tag}</a>
        {/each}
      </span>
    </div>
  </div>
  <div id="contentArea">
    <svelte:component this={data.content} />
  </div>
</article>
<a id="home" href="/blog">go back for home</a>

<!--
<svelte:component this={data.content} />
Vai renderizar um componente aleatório do svelte, mas que tem minimamente a ver com o conteúdo (this0)
É uma forma de renderizar algo sem saber o que esse algo é
-->
<style>
  article {
    padding: 1.5em;
    display: flex;
    flex-direction: column;
  }
  a {
    padding-left: 1em;
    padding-right: 1em;
    margin-left: 0.5em;
    border-radius: 6px;
    text-decoration: underline;
    background-color: white;
    color: black;
  }
  .info-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: left;
    align-items: left;
    margin-bottom: 20px;
  }

  .info-section .info-item {
    display: flex;
    align-items: center;
  }

  .info-section .info-item .icon {
    margin-right: 5px;
    color: white;
  }

  .info-section .info-item .text {
    font-size: 14px;
    color: white;
  }

  #home {
    padding: 0.5em;
    margin: 1em;
  }
  #contentArea {
    border: 1px solid rgba(0, 0, 0, 0.514);
    text-align: center;
  }
</style>
