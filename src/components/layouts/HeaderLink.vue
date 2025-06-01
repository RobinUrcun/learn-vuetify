<template>
  <v-card flat :color="color" tile>
    <v-btn
      class="text-h6"
      width="222px"
      color="white"
      height="65px"
      text
      :to="'/' + href"
      >{{ title }}</v-btn
    ></v-card
  >
</template>

<script>
export default {
  props: {
    title: String,
    href: String,
    color: String,
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  text-transform: none;
}
</style>
