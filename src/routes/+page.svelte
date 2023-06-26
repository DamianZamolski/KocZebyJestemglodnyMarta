<script lang="ts">
  import { onMount } from "svelte";

  let visitCount = 0;
  onMount(() => {
    visitCount = parseInt(localStorage.getItem("visitCount") || "0") + 1;
    localStorage.setItem("visitCount", visitCount.toString());
  });
</script>

<img src="https://i.ibb.co/dMGfVZZ/tree1-1.png" alt="tree1-1" />
{#if visitCount < 2}
  <p>
    Brawo, brawo... Nie ma to jak rozwiązywanie zagadki po wieczorze chlania i
    grania w gry, prawda?
  </p>
  <p>
    Ale jak wiadomo, wszystko co dobre, wymaga czasu. Więc na kolejną część
    zagadki musisz poczekać.
  </p>
  <p>
    I nie myśl, że dasz radę mnie oszukać - o drzewko trzeba regularnie dbać.
    Albo będziesz je podlewać, albo nie uda Ci się zdobyć nagrody!
  </p>
{:else}
  <p>
    Drzewko już podlane - nie ma się co śpieszyć. Teraz zostaje tylko cierpliwie
    czekać...
  </p>
{/if}

<style>
  :global(body) {
    background-image: url("https://i.ibb.co/vBRFT6T/bg-2-1.png");
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Caveat Variable", sans-serif;
  }

  p {
    margin: 0 auto;
    max-width: 60ch;
    text-align: center;
    font-size: 2em;
  }

  img {
    display: block;
    margin: 0 auto;
  }
</style>
