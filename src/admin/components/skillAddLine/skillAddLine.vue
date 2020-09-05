<template>
  <div class="skill-add-line-component">
    <app-input
      type="text"
      v-model="skill.text"
      
    />
    <app-input
      type="number"
      min="0"
      max="100"
      maxlength="3"
      v-model="skill.percent"
      
    />
    <round-btn type="round" @click="onClick" />
  </div>
</template>

<script>
import input from "../input";
import button from "../button";



export default {
  components: {
    appInput: input,
    roundBtn: button,
  },
  data () {
    return {
      skill: {
        text: "тест",
        percent: "50",
      }
    }
  }
  
}
</script>>


<style lang="postcss" src="./skillAddLine.pcss"></style>