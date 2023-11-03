<!-- Isso é um layout, algo que fica comum a todos os elems do diretório e dos subdiretórios -->
<!--Do mesmo jeito que +page é um keyword reservada para criar uma página, +layout é reservada para criar layouts -->

<script>
  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";
  import "../lib/styles/global.css";
  import { fade } from "svelte/transition";
  export let data;
</script>

<Header />

{#key data.path}
  <main
    id="content"
    in:fade={{ duration: 100, delay: 200 }}
    out:fade={{ duration: 100 }}
  >
    <slot />
  </main>
{/key}

<Footer />

<style>
  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 75vh;
  }
</style>
