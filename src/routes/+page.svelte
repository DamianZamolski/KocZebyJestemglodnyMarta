<script lang="ts">
  let clicked = false;
  function click() {
    clicked = true;
  }
</script>

{#if clicked}
  <img
    src="https://cdn.discordapp.com/attachments/718766995516162078/1126133441109442641/shutterstock-738008380_800x600.png"
    alt="dupa"
  />
  <p>Ciekawe co można z tego utkać w dzisiejszych czasach.</p>
{:else}
  <button on:click={click}>
    <img
      src="https://i.ibb.co/DgD8xTH/tree4-removebg-preview.png"
      alt="tree4-removebg-preview"
    />
  </button>
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
    border: unset;
    background: unset;
  }

  img {
    display: block;
    margin: 0 auto;
    padding: 1rem;
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
</style>
