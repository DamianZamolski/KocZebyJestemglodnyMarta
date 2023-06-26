<script lang="ts">
  import { onMount } from "svelte";

  let visitCount = 0;
  onMount(() => {
    visitCount = parseInt(localStorage.getItem("visitCount") || "0") + 1;
    localStorage.setItem("visitCount", visitCount.toString());
  });
</script>

<img src="https://i.ibb.co/dMGfVZZ/tree1-1.png" alt="tree1-1" />
<p>
  {#if visitCount < 2}
    Brawo, brawo... Nie ma to jak rozwiązywanie zagadki po wieczorze chlania i
    grania w gry, prawda? Ale jak wiadomo, wszystko co dobre, wymaga czasu. Więc
    na kolejną część zagadki musisz poczekać. I nie myśl, że dasz radę mnie
    oszukać - o drzewko trzeba regularnie dbać. Albo będziesz je podlewać, albo
    nie uda Ci się zdobyć nagrody!
  {:else}
    Drzewko już podlane - nie ma się co śpieszyć. Teraz zostaje tylko cierpliwie
    czekać...
  {/if}
</p>

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
