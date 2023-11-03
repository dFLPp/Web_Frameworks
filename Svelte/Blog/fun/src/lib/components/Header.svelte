<!--Boas práticas são nomear compoents com Letra maiúscula e separar uma pasta para cada component-->
<!--btw, n precisa exportar nada nem nada do tipo -->
<script>
  import { onMount } from "svelte";

  onMount(() => {
    console.log("O header 'montou'?! ");
  });

  const routes = [
    { name: "home", path: "/" },
    { name: "page1", path: "/page1" },
    { name: "page2", path: "/page2" },
    { name: "blog", path: "/blog" },
  ];
</script>

<header>
  <!--tipo o react: vc pode abrir um {} dentro do html para usar JS, mas aqui o return é um elemento html-->
  <nav class="navbar">
    <!--Eu nunca vi na prática, mas isso parece com JSP...-->
    {#each routes as route}
      <a href={route.path}>{route.name}</a>
    {/each}
  </nav>
</header>

<style>
  header {
    background-color: #2c3333;
    padding: 20px;
    display: flex;
    justify-content: center;
    min-height: 10vh;
  }

  .navbar {
    background-color: #0e8388;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .navbar a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
  }
</style>
