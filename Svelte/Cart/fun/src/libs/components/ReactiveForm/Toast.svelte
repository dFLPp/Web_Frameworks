<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  export let textContent;
  let dispacher = createEventDispatcher();

  onMount(() => {
    let fadeTime = setTimeout(() => {
      dispacher("destroyToast", {
        signal: 1,
      });
    }, 3500);
    return () => {
      clearTimeout(fadeTime);
    };
  });

  onDestroy(() => {
    console.log("guadalajara");
  });
</script>

<div>
  <p>{textContent}</p>
</div>

<style>
  div {
    width: 22em;
    background-color: white;
    padding: 1em;
    color: black;
    position: fixed;
    top: 1em;
    right: 0;
  }
  div p {
    font: 100;
    font-size: 1.5rem;
  }
</style>
