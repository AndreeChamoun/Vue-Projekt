<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <header>
    <HelloWorld title="Generate Memes" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/api">API</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
$menu-color: #c36;

body {
  text-align: center;
  overflow-x: hidden;
}
header {
  display: flex;
  width: 100%;
  padding: 25px;
  margin: -8px;
  background-color: rgb(201, 201, 201);
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}
nav {
  padding: 30px;
  text-align: center;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 15px;
  border-radius: 4px;
  margin-left: 25px;
}
.router-link-exact-active {
  color: white;
  background: $menu-color;
}
main {
  display: flex;
  justify-content: center;
}
</style>
