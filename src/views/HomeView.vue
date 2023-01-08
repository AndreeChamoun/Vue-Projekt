<script>

  export default {
    components: {

    },
    data() {
      return {
        n: true,
        name: ""
      }
    },
    methods: {
      onClick(){
        return this.name
      }
    }
  }
</script>

<template>
<div>
  <input type="text" placeholder="Input name" v-model.lazy="name" />
  <h1>Hi and welcome to my page {{onClick()}}</h1>
</div>
  <div id="center_text">
    <p :class="{ n }"></p>
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
