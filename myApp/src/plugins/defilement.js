export default {
    /*eslint-disable*/

    async mounted() {
        await this.startDefilement()
    },
    data: () => {
        return {
            currentDef: -1,
            currentInput: "",
            lengthDef: 0,
            interval: ""
        }
    },
    created() {

    },

    methods: {
        listAllDivForDef() {
            let elements = document.getElementsByClassName("defFriendly");
            this.lengthDef = elements.length

            for (let i = 0; i < elements.length; i++) {
                elements[i].setAttribute("indexdef", i);
            }

            return elements;
        },

        deleteAllDivForDef() {
                let elements = document.getElementsByClassName("defFriendly");
                this.lengthDef = elements.length

                for (let i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("indexdef");
                }

                return elements;
            },


        checkIfCurrentCorrespondToDefIndex(currentDefilement, elements) {
            const elementAtIndex = elements[currentDefilement];
            return elementAtIndex && currentDefilement.toString() === elementAtIndex.getAttribute("indexdef");
        },

        changeDirectly() {
            let elements = this.listAllDivForDef();
            let bool = this.checkIfCurrentCorrespondToDefIndex(this.currentDef, elements);
            if (bool) {
                elements[this.currentDef].classList.add("selected")
            }
        },

        resetSelectedClass(currentDefilementIndex) {
            if (currentDefilementIndex >= 0) {
                let elements = this.listAllDivForDef();
                elements[currentDefilementIndex].classList.remove("selected")
            }
        },

        startDefilement() {
            if (this.stateDef.enabledDefilement && this.stateDef.activeDefilement === false ) {
                this.interval = setInterval(() => {
                    this.stateDef.activeDefilement = !this.stateDef.activeDefilement
                    this.listAllDivForDef();
                    this.currentDef = this.stateDef.currentDefilement;
                    this.changeDirectly();
                    this.$store.commit("incrementCurrentDefilement");
                    this.keyListener()
                    this.keyCheck(this.currentInput);
                    this.currentInput = "None";


                    if (this.currentDef == this.lengthDef) {
                        this.stateDef.currentDefilement = 0
                        this.resetSelectedClass(this.lengthDef - 1)
                    } else {
                        this.resetSelectedClass(this.currentDef - 1)
                    }

                }, this.stateDef.speedDefilement)
            }
        },

        keyListener() {
            document.addEventListener('keydown', (e) => {
                console.log(e.code)
                this.currentInput = e.code;
            })
        },

        keyCheck(k) {
            if (k === this.stateDef.activeKey) {
                let key = this.currentDef - 1;
                this.restartInterval()
                console.log(k + " appuyé lorsque la div " + key + " fut active")
                this.keyCompute(key)
                return this.currentDef;
            }
        },

        keyCompute(number) {
            const targetDiv = document.getElementsByClassName("defFriendly")[number]
            //const targetDiv = document.querySelector("[defFriendly=number]")
            targetDiv.click();
            this.restartInterval();
            console.log(targetDiv)
        },

        stopInterval() {
            clearInterval(this.interval);
        },

        restartInterval() {
            clearInterval(this.interval)
            this.deleteAllDivForDef();
            this.stateDef.currentDefilement = 0;
            this.stateDef.activeDefilement = !this.stateDef.activeDefilement
            this.startDefilement()
        }
    },

    computed: {
        classObjectDef() {
            return {
                selected: false,
                defFriendly: true
            }
        },

        stateDef() {
            return this.$store.state.stateDefilement;
        },


    }
}

