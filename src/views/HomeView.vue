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
      <MainSection />
      <HomePresentation />
      <NewsSection />
    </div>
  </v-container>
</template>
<script>
import MainSection from "@/components/home/mainSection/MainSection.vue";
import HomePresentation from "@/components/home/homePresentation/HomePresentation.vue";
import NewsSection from "@/components/home/newsSection/NewsSection.vue";
export default {
  components: {
    MainSection,
    HomePresentation,
    NewsSection,
  },
};
</script>
