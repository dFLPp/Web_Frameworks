<h1>Yo</h1>
<div>
  <p>Então: /blog/categories é só uma route diferente, uma página normal</p>
  <p>
    Agora /blog/categories/bananas não. Antes isso daria error 404, mas como
    fizemos o esquema do [category] qualquer coisa que colocarmos no lugar do *
    em /blog/categories/* vai ser recebido dinamicamente. Para pegar o * usamos
    a função load com o parametro params
  </p>
</div>
<div>
  <h3>Todas as tags do blog</h3>
</div>

<style>
  div {
    width: 50vw;
    text-align: center;
  }
</style>
