<template>
  <div class="nav-container">
    <nav class="nav-bar">
      <router-link class="nav-option" to="/">Cards</router-link> |
      <router-link class="nav-option" to="/deckbuilder">Build a Deck</router-link> |
      <router-link class="nav-option" to="/battlegrounds">Battlegrounds</router-link> |
      <router-link class="nav-option" to="/mercenaries">Mercenaries</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'page-navbar'
}
</script>

<style scoped>
  .nav-container {
    align-items: center;
    background-color: #554131;
    border: inset 3px #FCD144;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    margin: 0 10vw;
    width: 80vw;
  }
  .nav-bar {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    padding: 12px 0;
    width: 50%;
  }
  .nav-option {
    color: #FCD144;
    font-family: 'Courier New', Courier, monospace;
    font-size: 25px;
    font-weight: 700;
    text-decoration: none;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  }
  .nav-option:hover {
    color: #9e8227;
  }
</style>
