<template>
  <div class="defContainer">
    <img
      class="logo"
      id="turtle"
      @click="changeSpeed(slower)"
      src="../assets/vitesseTortue.png"
      alt="slower"
    />
    <button class="normalBtn" @click="changeSpeed(normal)">Normal</button>
    <img
      class="logo"
      id="rabbit"
      @click="changeSpeed(faster)"
      src="../assets/vitesseLapin.png"
      alt="faster"
    />
  </div>
</template>

<script>
export default {
  name: "",
  props: ["id", "description", "image"],

  methods: {
    changeSpeed(speed) {
      speed === "slower"
        ? this.setSpeed(+400)
        : speed === "normal"
        ? this.setSpeed(1500)
        : speed === "faster"
        ? this.setSpeed(-400)
        : null;

      console.log("VITESSE ACTUELLE DU STORE >> " + this.speedDef);
    },

    setSpeed(number) {
      this.$store.commit("setSpeed", number);
    },
  },

  data: () => {
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

    this.imageLapin = "./assets/vitesseLapin.png";
  },

  computed: {
    stateDef() {
      return this.$store.state.stateDefilement;
    },

    speedDef() {
      return this.stateDef.speedDefilement;
    },
  },
};
</script>

<style scoped>
button {
  color: #8badbe;
  background: white;
  border-radius: 0.5em;
  padding: 2%;
  font-size: 1.2em;
  font-family: "Fredoka One", cursive;
}

.defContainer {
  display: inline-flex;
  align-items: center;
}

.logo {
  width: 5em;
  margin-right: 1em;
}

#turtle {
  width: 6em;
}

#rabbit {
  width: 4.5em;
}

.normalBtn {
  margin-right: 1em;
}

>>> .selected {
  box-shadow: 0px 0px 0px 7px #202abb9d;
  -webkit-box-shadow: 0px 0px 0px 7px #202abb9d;
  -moz-box-shadow: 0px 0px 0px 7px #202abb9d;
  border-radius: 5%;
}
</style>

