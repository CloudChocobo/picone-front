<template>
  <div class="Discussion">
    <div class="Texte">
      <div class="Selection">  
      <slot></slot>
      </div>
      <div class="fin">
        <Point></Point>
        <Interrogation></Interrogation>
      </div>
    </div>
  </div>
</template>

<script>
import Point from "@/components/Point.vue";
import Interrogation from "@/components/Interrogation.vue";
export default {
  name: "Discussion",
  components: {Point, Interrogation},
};
</script>
 <!-- css a revoir pour le placement   -->
    <style scoped>
.Discussion {
  display: grid;
  height: 200px;
  width: 100%;
  background-color: #ffffff;
  border: 10px solid #8badbe;
  border-radius: 15px;
}
.Selection{
    position: absolute;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(2, 1fr);
   width: 45%;
   height: 20%;
   gap: 10px;
}

.texte {
width: 10%;

}

.fin{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
}
.Point{
    width: 10%
}
.Interrogation{
    width: 10%;
}
</style>