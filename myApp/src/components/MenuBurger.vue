
<template>
    <div class="MenuBurger">
<img src="../assets/iconeMenu.svg" alt=""/>

    </div>
</template>

<script>
    export default {
        name: "MenuBurger",
        props: [],
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .MenuBurger{
        display: flex;
        flex-direction: column;
        height: 50%;
        width: 50%;
        border-radius: 50%;
        align-items: center;
    }
</style>
