<template>
  <div>
    <ul>
      <li v-for="card in cards" v-bind:key="card.id">
        <span>{{ card.name }}</span>
        <img :src="card.image"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'game-cards',

  data () {
    return {
      cards: ''
    }
  },
  created () {
    fetch('https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR&access_token=EU88KaLT912k9zWTp7iu2guu1rwJhrtgx1')
      .then(response => response.json())
      .then(data => (this.cards = data.cards))
  }
}

</script>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
  }
</style>
