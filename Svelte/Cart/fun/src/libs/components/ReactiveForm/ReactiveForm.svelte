<script>
  import Form from "./Form.svelte";
  import Toast from "./Toast.svelte";

  let showToast = false;
  let toastText = "";
  const handleToast = (e) => {
    showToast = true;
    toastText = e.detail.text;
  };

  const endToast = (e) => {
    if (e.detail.signal === 1) {
      showToast = false;
    }
  };
</script>

<Form on:toastEvent={handleToast} />
{#if showToast}
  <Toast bind:textContent={toastText} on:destroyToast={endToast} />
{/if}
