
<template>
 <ion-grid>
   <ion-row>
     <!-- on va utiliser v for pour faire une boucle dans array icone, pour le moment array s appelle icone mai son peut changer  -->
     <ion-col size="4" :key="icone" v-for="icone in icone">
<ion-img :src="icone.webviewPath"></ion-img>
     </ion-col>
   </ion-row>
 </ion-grid>
<style scoped></style>
