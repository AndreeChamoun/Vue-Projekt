<script>
  export default {
    created() {
      fetch('https://hamsterwars-recoil.herokuapp.com/hamsters/')
        .then((response) => response.json())
        .then((hamsters) => {
          this.hamsters = hamsters
        })
    },
    data() {
      return {
        hamsters: ""
      }
    }
  }
</script>

<template>
  <div id="center_api">
    <ol>
      <li :key="hamster.id" v-for="hamster in hamsters.slice(0, 10)">
        {{ hamster.name }}
      </li>
    </ol>
  </div>
</template>

<style>
  li {
    text-align: left;
    line-height: 1.5;
  }
  #center_api {
    display: flex;
    justify-content: center;
  }
</style>
