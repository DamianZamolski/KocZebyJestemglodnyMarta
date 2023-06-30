<script lang="ts">
  import { onMount } from "svelte";

  let timer: number | null = null;
  let podlano = 0;
  let success = false;

  onMount(() => {
    success = JSON.parse(localStorage.getItem("success") || "false");
  });

  function podlej() {
    if (!timer) {
      timer = setTimeout(() => {
        if (podlano === 18) {
          localStorage.setItem("success", "true");
          success = true;
        }
        podlano = 0;
        timer = null;
      }, 10000);
    }

    podlano++;
  }
</script>

<img src="https://i.ibb.co/CVBFzZJ/tree2-1.png" alt="tree2-1" />
{#if success}
  <p>
    No dobrze, już wystarczająco nakapałeś. Teraz daj mi chwilę ochłonąć po tym
    złotym deszczu.
  </p>
{:else}
  <p>Osiemnaście listków? Mam nadzieję, że umiesz dbać o swoje drzewko.</p>
  <button on:click={podlej}>Podlej</button>
{/if}

<style>
  :global(body) {
    background-image: url("https://i.ibb.co/vBRFT6T/bg-2-1.png");
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Caveat Variable", sans-serif;
  }

  :global(*) {
    margin: 0 auto;
  }

  button {
    display: block;
  }

  p {
    margin: 0 auto;
    max-width: 60ch;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.7);
    text-align: center;
    font-size: 2em;
  }

  img {
    display: block;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
