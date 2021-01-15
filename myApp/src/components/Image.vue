
<template>
    <div class="cont">
<img src="../assets/***.png" alt="" />
		<div class="label">{{ label }}</div>
    </div>
</template>

<script>
    export default {
        name: "Image",
        props: ["label"],
        data() {
            return {};
        },
    };
</script>

<style scoped>
.img{
text-align: center;
align-items: center;
display:inline-block;
width:25%;
}
</style>
