<script>
export default {
  components: {},
  data() {
    return {
      intro: true,
      name: "",
    };
  },
  methods: {
    onClick() {
      return this.name;
    },
  },
};
</script>

<template>
  <div>
    <input type="text" placeholder="Input name" v-model.lazy="name" />
    <h1>Welcome, {{ onClick() }}</h1>
  </div>
  <div id="center_text">
    <p :class="{ intro }"></p>
  </div>
</template>

<style>
.n {
  text-align: left;
  width: 500px;
  font-size: 28px;
}
#center_text {
  display: flex;
  justify-content: center;
}
</style>
