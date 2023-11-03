<script>
  import Item from "./Item.svelte";
  import { data } from "../../data/store";
  import { addToCart } from "../../stores/index";
  const addCart = (e) => {
    addToCart(e.detail);
  };
</script>

<div>
  <div id="header">
    <h1>Loja</h1>
  </div>
  {#each data as item (item.id)}
    <Item
      name={item.name}
      price={item.price}
      id={item.id}
      on:addCart={addCart}
    />
  {/each}
</div>

<style>
  #header {
    padding: 1em;
    text-align: center;
  }
</style>
