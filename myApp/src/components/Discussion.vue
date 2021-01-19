

<template>
    <div class="Discussion">
<div class="Texte">
    <slot></slot>
</div>

    </div>
</template>

<script>

    export default {
        name: "Discussion",
        components: {},
    };
</script>
 <!-- css a revoir pour le placement   -->
    <style scoped>
    
	
  
        .Discussion{
   height:200px;
   width:100%;
   background-color:#ffffff;
  border: 10px solid #8BADBE;
  border-radius: 15px;
 
}

.texte{
     height:9px;
   width:10%;
   background-color:#40c256;
}
   </style>

        
