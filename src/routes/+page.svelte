<script lang="ts">
  import { onMount } from "svelte";

  let timer: number | null = null;
  let podlano = 0;
  let success = false;
  let thirdQuest = false;

  onMount(() => {
    success = JSON.parse(localStorage.getItem("success") || "false");
    thirdQuest = JSON.parse(localStorage.getItem("third-quest") || "false");
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

  let jablka = 0;
  let gruszki = 0;

  function jablko() {
    gruszki = 0;
    thirdQuest = ++jablka === 5;
    localStorage.setItem("third-quest", JSON.stringify(thirdQuest));
  }

  function gruszka() {
    jablka = 0;
    thirdQuest = ++gruszki === 5;
    localStorage.setItem("third-quest", JSON.stringify(thirdQuest));
  }
</script>

{#if thirdQuest}
  <img
    src="https://i.ibb.co/y6SgnxF/tree3-2-removebg-preview.png"
    alt="tree3-2-removebg-preview"
  />
  <p>Świetnie. Niech i tak będzie. Kiedyś.</p>
{:else if success}
  <img
    src="https://i.ibb.co/y6SgnxF/tree3-2-removebg-preview.png"
    alt="tree3-2-removebg-preview"
  />
  <p>
    Jeszcze trochę i będziesz mógł zbierać owoce swojej pracy. Rośnie na mnie
    pięć POTĘŻNYCH KONARÓW. Myślisz, żę urodzę jabłka czy gruszki?
  </p>
  <button on:click={jablko}>Jablko</button>
  <button on:click={gruszka}>Gruszka</button>
{:else}
  <img src="https://i.ibb.co/CVBFzZJ/tree2-1.png" alt="tree2-1" />
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
