<template>
  <v-card
    color="rgb(180,173,166)"
    class="position-relative"
    width="340"
    height="352px"
  >
    <v-img height="225" :src="imgSrc"></v-img>
    <v-card-title class="text-subtitle-1 white--text font-weight-medium">{{
      title
    }}</v-card-title>
    <v-btn class="newsBtn" :to="url">Lire la suite</v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    url: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.newsBtn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.position-relative {
  position: relative;
}
</style>
