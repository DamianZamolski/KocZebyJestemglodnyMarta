<script lang="ts">
  import { onMount } from "svelte";

  let visitCount = 0;
  onMount(() => {
    visitCount = parseInt(localStorage.getItem("visitCount") || "0") + 1;
    localStorage.setItem("visitCount", visitCount.toString());
  });
</script>

{#if visitCount === 1}
  <div class="text">
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
  </div>
  <div class="picture">
    <img src="https://i.ibb.co/dMGfVZZ/tree1-1.png" alt="tree1-1" />
  </div>
{/if}

<style>
  :global(body) {
    background-image: url("https://i.ibb.co/vBRFT6T/bg-2-1.png");
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Caveat Variable", sans-serif;
  }
  .text {
    margin: 250px auto 0 auto;
    text-align: center;
    max-width: 600px;
    font-size: 30px;
    text-shadow: 5px 3px 7px rgba(66, 68, 90, 1);
  }

  .picture {
    text-align: center;
  }
</style>
