<template>
  <div><NavBar /><Carousel /></div>
</template>

<script>
import Carousel from "../carousel/Carousel.vue";
import NavBar from "./navBar/NavBar.vue";

export default {
  components: { Carousel, NavBar },
};
</script>
