const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/styles/variable.scss"`,
      },
      scss: {
        additionalData: `@import "./src/styles/variable.scss";`,
      },
    },
  },
});
