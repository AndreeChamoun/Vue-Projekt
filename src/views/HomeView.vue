<script>
export default {
  data() {
    return {
      welcome: true,
      name: "",
    };
  },
  computed: {
    intro: function () {
      return "Welcome," + this.name;
    },
  },
};
</script>

<template>
  <div id="center_text">
    <input type="text" placeholder="Input your name" v-model.lazy="name" />

    <p :class="{ welcome }">
      Welcome,
      {{ name }}!
    </p>
  </div>
</template>

<style>
.n {
  text-align: left;
  width: 500px;
  font-size: 28px;
}
#center_text {
  max-width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.welcome {
  width: 100%;
}
</style>
