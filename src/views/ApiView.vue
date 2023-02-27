<script>
import ApiList from "../components/ApiList.vue";

export default {
  components: {
    ApiList,
  },
  data() {
    return { error: false };
  },
};
</script>

<template>
  <p v-if="error">Error</p>
  <div v-else id="content"><ApiList /></div>
</template>

<style lang="scss">
$api-font-size: 25px;
p {
  text-align: left;
  width: 100%;
  font-size: 28px;
}
#content {
  display: flex;
  justify-content: center;
  width: 100%;
}
li {
  font-size: $api-font-size;
}
</style>
