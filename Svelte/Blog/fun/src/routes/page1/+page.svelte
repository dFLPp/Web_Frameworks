<script>
  let x = 0;
  const handleClick = () => {
    x += 1;
  };
</script>

<div>
  <h1>Essa é a página 1</h1>
  <button on:click={handleClick}> clique aqui </button>
  {#if x !== 0}
    <p>{x}</p>
  {/if}
</div>
