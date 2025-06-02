<template>
  <div class="mt-16 text-center">
    <h2>DERNIÈRES ACTUALITÉS</h2>
    <v-row class="mt-5"
      ><v-col
        ><NewsCard
          imgSrc="/images/news_pictures/divit.png"
          title="[ 🔵 Article Ouest France - Au Divit, priorité à l'accompagnement de la fin de vie ]"
          url="/le-divit"
      /></v-col>
      <v-col
        ><NewsCard
          imgSrc="/images/news_pictures/planning.png"
          title="Planning EHPAD - juin 2025"
          url="/"
      /></v-col>
      <v-col
        ><NewsCard
          imgSrc="/images/news_pictures/referent.jpg"
          title="[ 📸 Focus sur la journée des référents LISP – Jeudi 22 mai 2025 ]"
          url="/le-divit"
      /></v-col>
    </v-row>
  </div>
</template>

<script>
import NewsCard from "./newsCard/NewsCard.vue";
export default {
  components: { NewsCard },
};
</script>
