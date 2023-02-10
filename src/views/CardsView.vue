<template>
  <div>
    <h1>Cards</h1>
    <cards />
  </div>
</template>

<script>
import cards from '../components/cards/Cards.vue'

export default {
  name: 'cards-view',

  components: {
    cards
  },

  data () {
    return {
      msg: 'Welcome to your vue.js app'
    }
  }
}
</script>

<style>

</style>
