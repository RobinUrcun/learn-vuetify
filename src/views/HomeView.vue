<template>
  <v-container>
    <v-img
      class="mt-5 mb-5"
      contain
      height="120"
      width="auto"
      src="/images/logo_association.jpg"
      alt="Logo"
    ></v-img>
    <div class="mainSection">
      <v-app-bar
        class="d-flex justify-center"
        height="50px"
        color="rgb(84, 144, 197)"
      >
        <v-btn height="50px" color="white" text tile elevation to="/historique"
          >Historique</v-btn
        >
        <v-btn
          height="50px"
          color="white"
          text
          tile
          elevation
          to="/nos-missions"
          >Nos missions</v-btn
        >
        <v-btn height="50px" color="white" text tile elevation to="/les-membres"
          >Les membres</v-btn
        >
        <v-btn height="50px" color="white" text tile elevation to="/nos-moyens"
          >Nos moyens</v-btn
        >
        <v-btn
          height="50px"
          color="white"
          text
          tile
          elevation
          to="/nos-volontes"
          >Nos volontés</v-btn
        >
        <v-btn height="50px" color="white" text tile elevation to="/nos-valeurs"
          >Nos valeurs</v-btn
        >
        <v-btn height="50px" color="white" text tile elevation to="/nouvelles"
          >Actualités</v-btn
        >
      </v-app-bar>
      <v-carousel height="400px" hide-delimiters cycle="true" interval="3000">
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
    </div>
  </v-container>
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
