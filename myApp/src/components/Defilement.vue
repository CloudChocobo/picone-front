<template>
	<div class="defContainer">
    <img class="logo" @click="changeSpeed(slower)" src="../assets/vitesseTortue.png" alt="slower" />
    <button @click="changeSpeed(normal)">Normal</button>
    <img class="logo" @click="changeSpeed(faster)" src="../assets/vitesseLapin.png" alt="slower" />
  </div>
</template>

<script>

      export default {
      name: "",
        props: ["id", "description", "image"],



      methods: {
        changeSpeed(speed) {

          speed === "slower" ?
              this.setSpeed(+400) : speed === "normal" ?
              this.setSpeed(1500) : speed === "faster" ?
                  this.setSpeed(-400) : null;

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

        this.imageLapin = './assets/vitesseLapin.png'
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

.defContainer {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 30px;
}

.logo {
  height: 60px;

}

>>> .selected {
  box-shadow: 0px 0px 0px 7px #202abb9d;
  -webkit-box-shadow: 0px 0px 0px 7px #202abb9d;
  -moz-box-shadow: 0px 0px 0px 7px #202abb9d;
  transform: scale(1.2);
}
</style>

