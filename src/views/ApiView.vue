<script>
  import HamstersList from '../components/HamstersList.vue'
  export default {
    components: {
      HamstersList
    },
    data() {
      return { error: false }
    },
  }
</script>

<template>
  <h1>Simple API</h1>
  <p v-if="error">Something went wrong!!!</p>
  <div v-else id="center_text">
    <p>
      This is a simple fetch from a test API <br>
      I decided to only show 10 of them for the page to look much more clean but
      still showing the results. I made this API for the fullstack portion of my education.
    </p>
  </div>
    <HamstersList />
</template>

<style >
  p {
    text-align: left;
    width: 500px;
    font-size: 28px;
  }
  #center_text {
    display: flex;
    justify-content: center;
  }
  li {
    font-size: 25px;
  }
</style>
