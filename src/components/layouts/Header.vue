<template>
  <v-app-bar absolute app class="d-flex justify-center p-0">
    <HeaderLink title="L'association" href="" color="rgb(84, 144, 197)" />
    <HeaderLink title="Lachenaud" href="lachenaud" color="rgb(226, 143, 51)" />

    <HeaderLink title="Le Divit" href="le-divit" color="rgb(213, 175, 105)" />

    <HeaderLink
      title="La Martinière"
      href="la-martiniere"
      color="rgb(225, 151, 157)"
    />

    <HeaderLink
      title="Maréchal Leclerc"
      href="marechal-leclerc"
      color="rgb(119, 156, 66)"
    />
  </v-app-bar>
</template>

<script>
import HeaderLink from "./HeaderLink.vue";

export default {
  components: { HeaderLink },
};
</script>

<style lang="scss">
.v-btn {
  font-family: "Open Sans", sans-serif !important;
}
</style>
