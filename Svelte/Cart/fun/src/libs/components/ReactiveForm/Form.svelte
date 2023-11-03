<script>
  import { createEventDispatcher } from "svelte";
  let dispacher = createEventDispatcher();
  const toastBroadcast = (code, text) => {
    dispacher("toastEvent", {
      code: code,
      text: text,
    });
  };

  let option = 0;
  let textInput = "";
  const handleSubmit = (e) => {
    if (option === 0) {
      toastBroadcast(1, "Selecione ao menos uma opção.");
    } else if (!textInput) {
      toastBroadcast(2, "Escreva alguma coisa.");
    } else {
      option = 0;
      textInput = "";
      toastBroadcast(0, "O formulário foi enviado corretamente.");
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={textInput} />
  {#each [1, 2] as opt}
    <label>
      <input type="radio" name="options" value={opt} bind:group={option} />
      {"Option" + opt}
    </label>
  {/each}
  <button type="submit">Send</button>
</form>
