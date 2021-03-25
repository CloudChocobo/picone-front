<template>
	<div>
    <button  @click="changeSpeed(slower)">Slow</button>
    <button @click="changeSpeed(normal)">Normal</button>
    <button  @click="changeSpeed(faster)">Fast</button>
  </div>
</template>

<script>
    //import { interval } from "@/views/SentenceBuild.vue";
    export default {
      name: "",

      methods: {
        changeSpeed(speed) {

          speed === "slower" ?
              this.setSpeed(+200) : speed === "normal" ?
              this.setSpeed(1500) : speed === "faster" ?
                  this.setSpeed(-200) : null;

          console.log("VITESSE ACTUELLE DU STORE >> " + this.speedDef)
        },

        setSpeed(number) {
          this.$store.commit("setSpeed", number);
        },
      },


      data :() => {
        return {
          slower: "slower",
          normal: "normal",
          faster: "faster",
          };
      },

      mounted() {

        for (let i = 0; i < this.$el.children.length; i++) {
          this.$el.children[i].classList.add("defFriendly");
        }


         },

      computed: {

        stateDef() {
          return this.$store.state.stateDefilement;
        },

        speedDef() {
          return this.stateDef.speedDefilement ;
        }
      }



    }
</script>

<style scoped>

button {
  color: white;
  background: orange;
  border: none;
  padding: 10px;
  font-weight: 300;
  font-size: 1.2em;
  font-family: 'Lato';
}

>>> .selected {
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
}
</style>

