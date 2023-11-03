<script>
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();

  export let name;
  export let price;
  export let id;

  const addToCart = ({ id, name, price }, quantity) => {
    dispatcher("addCart", {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
    });
  };
</script>

<div class="item">
  <h2 class="item-title">{name}</h2>
  <span class="item-price">R$ {price}</span>
  <p class="item-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  <button class="item-button" on:click={() => addToCart({ id, name, price }, 1)}
    >adicionar o carrinho</button
  >
</div>

<style>
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
  }

  .item-title {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .item-price {
    margin-top: 5px;
    font-size: 16px;
  }

  .item-description {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
  }

  .item-button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #0e8388;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .item-button:hover {
    background-color: #0c6d73;
  }
</style>
