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
    fetch('https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=EUJe55AxAWY3riswEdur4BRCIX6PiBO3So')
      .then(response => response.json())
      .then(data => (this.cards = data.cards))
  }
}
</script>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
  }
</style>
