<template>
  <div class="app-container">
    <headline title="Панель администрирования">
      <user />
    </headline>
    <navigation />
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
          <iconed-button type="iconed" title="Добавить группу" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headline from "./components/headline/headline";
import user from "./components/user/user";
import navigation from "./components/navigation/navigation";
import button from "./components/button/button";


export default {
  components: {
    headline,
    user,
    navigation,
    iconedButton: button
  },
};
</script>
 
<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>