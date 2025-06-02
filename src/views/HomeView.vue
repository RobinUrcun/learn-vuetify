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
      <v-sheet color="rgb(180,173,166)" class="pa-15 mt-10 position-relative">
        <span class="home-presentation"
          >L’association Jean LACHENAUD est une association constituée en 1974,
          à but non lucratif et régie par la loi du 1er juillet 1901. Elle a
          pour objet de contribuer au développement de la politique et des
          actions en matière sanitaire et sociale en faveur des militaires,
          anciens militaires, personnels civils de la défense et leurs familles.
          Elle a vocation à assurer la gestion d’établissements sanitaires,
          médico-sociaux ou sociaux destinés à offrir en priorité aux
          militaires, anciens militaires, personnels civils de la défense et
          leurs familles qui le nécessitent un accompagnement et des soins
          adaptés à leur situation dans un environnement de qualité.<br />
          L’Association est issue d’une volonté de la collectivité de Défense
          d’offrir à ses ressortissants des prestations sanitaires et
          médicosociales non couvertes par les opérateurs institutionnels
          existants au sein du Ministère de la Défense.
        </span>
        <br /><span class="home-presentation mt-5"
          >Afin de maîtriser les tarifs pratiqués dans les établissements de
          santé dont elle assure la gestion, l’association s’est engagée dans
          une démarche de regroupement des fonctions supports au niveau de son
          siège social. Par ailleurs, dans le but d’améliorer la qualité des
          prestations proposées tout en en maîtrisant le coût, l’association met
          en place une démarche de mutualisation de certaines fonctions ou
          compétences (qualité, informatique, expertise comptable, assistance
          juridique, Ressources Humaines..) entre les établissements.</span
        >
        <div class="arrowWrapper">
          <v-icon color="rgb(84, 144, 197)" size="60px"
            >fas fa-chevron-down</v-icon
          >
        </div>
      </v-sheet>
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
.home-presentation {
  color: white;
  font-weight: 500;
  line-height: 1.5;
  display: inline-block;
}
.position-relative {
  position: relative;
}
.arrowWrapper {
  position: absolute;
  height: 80px;
  bottom: -38px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 4px rgb(180, 173, 166) solid;
}
</style>
