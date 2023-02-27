<script>
export default {
  data() {
    return {
      memes: [],
      showMemes: false,
    };
  },
  methods: {
    toggleMemes() {
      this.showMemes = !this.showMemes;
    },
    async fetchMemes() {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        this.memes = data.data.memes;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchMemes();
  },
};
</script>

<template>
  <div>
    <h1>List of Memes</h1>
    <button @click="toggleMemes">Show Memes</button>
    <ul v-if="showMemes">
      <li v-for="meme in memes.splice(0, 10)" :key="meme.id">
        <img :src="meme.url" />
        {{ meme.name }}
      </li>
    </ul>
  </div>
</template>

<style>
img {
  height: 100%;
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
li {
  height: 15em;
}

button {
  color: seashell;
  font-size: 15px;
  background: #c36;
  border-radius: 5px;
  border: none;
  padding: 15px;
}
</style>
