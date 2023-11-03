<script>
  import { onMount } from "svelte";
  import { addToCart, removeFromCart } from "../../stores/index";
  let items = [];
  onMount(() => {
    items = JSON.parse(localStorage.getItem("cartItems"));
    return () => console.log(items);
  });
</script>

{#if !items}
  <p>Sem items no carrinho no momento</p>
  <p>Retorne para a loja <a href="/">aqui.</a></p>
{:else}
  <div id="Header">
    <h1>Carrinho</h1>
    <p>Preço total = xxx</p>
  </div>
  {#each items as item (item.id)}
    <div class="item">
      <p>{item.name}</p>
      <p>Preço unitário: {item.price}</p>
      <div class="opts">
        <button
          on:click={() =>
            removeFromCart({
              id: item.id,
              name: item.name,
              quantity: item.quantity,
            })}>-</button
        >
        <p>Quantidade: {item.quantity}</p>
        <button
          on:click={() =>
            addToCart({
              id: item.id,
            })}>+</button
        >
      </div>
    </div>
  {/each}
{/if}

<style>
  #Header {
    background-color: #0e8388;
    color: white;
    text-align: center;
    padding: 1.5em;
  }
  .opts {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
  }

  .opts button {
    border: none;
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    text-align: center;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  .item {
    display: flex;
    flex-direction: column;
    border: 1px solid #0e8388;
    margin: 1rem;
    border-radius: 8px;
    text-align: center;
    justify-content: center;
    padding: 1.5em;
  }
</style>
