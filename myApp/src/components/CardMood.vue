<!-- we used this component to display a "mood card" and put the selected icon in the top bar-->
<template>
    <div>
        <ImageGrid>
            <div class = "moodCard">
                <div :id="id">
                    <div><img :src="image" /></div>
                    <div class="description">{{ description }} </div>
                </div>
            </div>
        </ImageGrid>
    </div>
</template>

<script>
import ImageGrid from "@/components/ImageGrid.vue";
export default {
    name: "CardMood",
    components: {ImageGrid},
    props: ["id", "description", "image"],
}
</script>

<style scoped>
.moodCard {
  font-size: 23px;
  font-weight: bold;
  color: #536974;
  text-align: center;
  cursor: pointer;
}
.description{
  margin-top:-5px;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 55px;
  object-fit:cover;
}
</style>