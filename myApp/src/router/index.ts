/* index where the routes are declared*/
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Home from "@/views/Home.vue";
import AdminHome from "@/views/AdminHome.vue";
import Noemie from "@/views/Noemie.vue";
import ModalTest from "@/views/ModalTest.vue";
import Food from "@/views/Food.vue";
import Actions from "@/views/Actions.vue";
import Actions2 from "@/views/Actions2.vue";
import Mood from "@/views/Mood.vue";
import Interlocutor from "@/views/Interlocutor.vue";
import StartTalking from "@/views/StartTalking.vue";
import Care from "@/views/Care.vue";
import Fruits from "@/views/Fruits.vue"
import Dishes from "@/views/Dishes.vue";
import Veggetables from "@/views/Veggetables.vue";
import Drinks from "@/views/Drinks.vue";
import Wc from "@/views/Wc.vue";
import Furniture from "@/views/Furniture.vue";
import Hobbies from "@/views/Hobbies.vue";
import Clothes from "@/views/Clothes.vue";
import Body from "@/views/Body.vue";
import Pain from "@/views/Pain.vue";
import Dessert from "@/views/SentenceBuild.vue";
import Hygiene from "@/views/Hygiene.vue";
import Objects from "@/views/Objects.vue";
import Recap from "@/views/Recap.vue";

const routes: Array<RouteRecordRaw> = [
{
		path: "/",
    redirect: "/Home",
    component: Home,
  },
  {
    name: "Home",
    path: "/Home",
    component: Home,
  },
  {
    name: "ModalTest",
    path: "/modaltest",
    component: ModalTest,
  },
  {
    name: "AdminHome",
    path: "/adminHome",
    component: AdminHome,
  },
 
 {
    name: "Noemie",
    path: "/noemie",
    component: Noemie,
  },
   {
    name: "Food",
    path: "/food",
    component: Food,
  },
     {
    name: "Home",
    path: "/Home",
    component: Home,
  },
     {
    name: "Actions",
    path: "/actions",
    component: Actions,
  },
       {
    name: "Actions2",
    path: "/actions2",
    component: Actions2,
  },
     {
    name: "Mood",
    path: "/Mood",
    component: Mood,
  },

  {
    name: "Care",
    path: "/care",
    component: Care,
  },
     {
    name: "Interlocutor",
    path: "/interlocutor",
    component: Interlocutor,
  },  
     {
    name: "StartTalking",
    path: "/startTalking",
    component: StartTalking,
  },  
     {
    name: "Fruits",
    path: "/fruits",
    component: Fruits,
  },  
       {
    name: "Dishes",
    path: "/dishes",
    component: Dishes,
  }, 
       {
    name: "Veggetables",
    path: "/veggetables",
    component: Veggetables,
  }, 
         {
    name: "SentenceBuild",
    path: "/sentencebuild",
    component: Drinks,
  },  
           {
    name: "Wc",
    path: "/wc",
    component: Wc,
  },  
           {
    name: "Furniture",
    path: "/furniture",
    component: Furniture,
  }, 
           {
    name: "Hobbies",
    path: "/hobbies",
    component: Hobbies,
  }, 
           {
    name: "Clothes",
    path: "/clothes",
    component: Clothes,
  }, 
           {
    name: "Body",
    path: "/body",
    component: Body,
  }, 
           {
    name: "Pain",
    path: "/pain",
    component: Pain,
  }, 

           {
    name: "Hygiene",
    path: "/hygiene",
    component: Hygiene,
  }, 
             {
    name: "Objects",
    path: "/objects",
    component: Objects,
  }, 
               {
    name: "Recap",
    path: "/recap",
    component: Recap,
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
