<template>
  <v-carousel height="400px" hide-delimiters cycle interval="3000">
    <v-carousel-item
      src="/images/association_carousel/association_P1.jpg"
      alt="tototo"
    >
      <v-sheet class="caption-sheet" elevation="0" tile>
        <span class="text-h5 font-weight-medium"
          >Etablissement La Martinière à Saclay (91)</span
        >
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item
      src="/images/association_carousel/association_P2.jpg"
      alt="tototo"
    >
      <v-sheet class="caption-sheet" elevation="0" tile>
        <span class="text-h5 font-weight-medium"
          >Etablissement Le Divit à Ploemeur (56)</span
        >
      </v-sheet></v-carousel-item
    >
    <v-carousel-item
      src="/images/association_carousel/association_P3.jpg"
      alt="tototo"
    >
      <v-sheet class="caption-sheet" elevation="0" tile>
        <span class="text-h5 font-weight-medium"
          >Etablissement Jean Lachenaud à Fréjus (83)</span
        ></v-sheet
      ></v-carousel-item
    >
  </v-carousel>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.caption-sheet {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.365);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
