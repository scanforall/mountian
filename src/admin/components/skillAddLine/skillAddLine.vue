<template>
  <div class="skill-add-line-component">
    <app-input
      type="number"
      min="0"
      max="100"
      maxlength="3" 
    />
    <round-btn type="iconed" @click="onClick" />
  </div>
</template>

<script>
import input from "../input";
import button from "../button";


export default {
  
}
</script>>


<style lang="postcss" src="./skillAddLine.pcss"></style>