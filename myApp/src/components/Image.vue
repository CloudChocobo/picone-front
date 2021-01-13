
<template>
	<div class="lol">
    <Image id="jaisoif"></Image>
	<Image id="jaimal" :isEntoured={images[selectedImage] == "jaimal"}></Image></div>
</template>

<script>
    export default {
        name: "",
		props: [],
		methods:{
			cycleThroughImages(){
				setInterval(()=>{
					selectedImage += 1;
					if(selectedImage > images.length - 1 ) selectedImage = 0;
				},1000),
			},
		},
        data() {
            return {
				selectedImage: 1,
				images: ['jaisoif', 'jaimal'],
			};
		},
		created(){
			cycleThroughImages();
		}
    };
</script>

<style scoped></style>
