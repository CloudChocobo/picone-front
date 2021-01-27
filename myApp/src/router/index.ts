import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Interlocuteur from "@/views/Interlocuteur.vue";
import Humeur from "@/views/Humeur.vue";
import Theme from "@/views/Theme.vue";
import Accueil from "@/views/Accueil.vue";
import AdminAccueil from "@/views/AdminAccueil.vue";
import Nourriture from "@/views/Nourriture.vue";
import Action from "@/views/Action.vue";
import JeTu from "@/views/JeTu.vue";
import Soins from "@/views/Soins.vue";
import Noemie from "@/views/Noemie.vue";
import Test from "@/views/Test.vue";
import ModalTest from "@/views/ModalTest.vue";
import NoemieNourriture from "@/views/NoemieNourriture.vue";
import NoemieAccueil from "@/views/NoemieAccueil.vue";
import NoemieAction from "@/views/NoemieAction.vue";
import NoemieHumeur from "@/views/NoemieHumeur.vue";
import NoemieInterlocuteur from "@/views/NoemieInterlocuteur.vue";
import NoemieJeTu from "@/views/NoemieJeTu.vue";
import NoemieSoin from "@/views/NoemieSoin.vue";
import NoemieFruits from "@/views/NoemieFruits.vue"
import NoemiePlats from "@/views/NoemiePlats.vue";
import NoemieLegumes from "@/views/NoemieLegumes.vue";
import NoemieBoissons from "@/views/NoemieBoissons.vue";
import NoemieWc from "@/views/NoemieWc.vue";
import NoemieMobilier from "@/views/NoemieMobilier.vue";
import NoemieLoisirs from "@/views/NoemieLoisirs.vue";
import NoemieVetements from "@/views/NoemieVetements.vue";
import NoemieCorps from "@/views/NoemieCorps.vue";
import NoemieDouleurs from "@/views/NoemieDouleurs.vue";
import NoemieDessert from "@/views/NoemieDessert.vue";
import NoemieSeLaver from "@/views/NoemieSeLaver.vue";

const routes: Array<RouteRecordRaw> = [
{
		path: "/",
    redirect: "/accueil",
    component: Accueil,
  },
  {
    name: "Accueil",
    path: "/accueil",
    component: Accueil,
  },
  {
    name: "ModalTest",
    path: "/modaltest",
    component: ModalTest,
  },
  {
    name: "AdminAccueil",
    path: "/adminaccueil",
    component: AdminAccueil,
  },
  {
    name: "JeTu",
    path: "/jeTu",
    component: JeTu,
  },
  {
    name: "Interlocuteur",
    path: "/interlocuteur",
    component: Interlocuteur,
  },
  {
    name: "Action",
    path: "/action",
    component: Action,
  },
  {
    name: "Humeur",
    path: "/humeur",
    component: Humeur,
  },
  {
    name: "Theme",
    path: "/theme",
    component: Theme,
  },
  {
    name: "Nourriture",
    path: "/nourriture",
    component: Nourriture,
  },
  {
    name: "Soins",
    path: "/soins",
    component: Soins,
  },
 {
    name: "Noemie",
    path: "/noemie",
    component: Noemie,
  },
 {
    name: "Test",
    path: "/test",
    component: Test,
  },
   {
    name: "NoemieNourriture",
    path: "/noemienourriture",
    component: NoemieNourriture,
  },
     {
    name: "NoemieAccueil",
    path: "/noemieaccueil",
    component: NoemieAccueil,
  },
     {
    name: "NoemieAction",
    path: "/noemieaction",
    component: NoemieAction,
  },
     {
    name: "NoemieHumeur",
    path: "/noemiehumeur",
    component: NoemieHumeur,
  },

  {
    name: "NoemieSoin",
    path: "/noemiesoin",
    component: NoemieSoin,
  },
     {
    name: "NoemieInterlocuteur",
    path: "/noemieinterlocuteur",
    component: NoemieInterlocuteur,
  },  
     {
    name: "NoemieJeTu",
    path: "/noemiejetu",
    component: NoemieJeTu,
  },  
     {
    name: "NoemieFruits",
    path: "/noemiefruits",
    component: NoemieFruits,
  },  
       {
    name: "NoemiePlats",
    path: "/noemiplats",
    component: NoemiePlats,
  }, 
       {
    name: "NoemieLegumes",
    path: "/noemielegumes",
    component: NoemieLegumes,
  }, 
         {
    name: "NoemieBoissons",
    path: "/noemieboissons",
    component: NoemieBoissons,
  },  
           {
    name: "NoemieWc",
    path: "/noemiewc",
    component: NoemieWc,
  },  
           {
    name: "NoemieMobilier",
    path: "/noemiemobilier",
    component: NoemieMobilier,
  }, 
           {
    name: "NoemieLoisirs",
    path: "/noemieloisirs",
    component: NoemieLoisirs,
  }, 
           {
    name: "NoemieVetements",
    path: "/noemievetements",
    component: NoemieVetements,
  }, 
           {
    name: "NoemieCorps",
    path: "/noemiecorps",
    component: NoemieCorps,
  }, 
           {
    name: "NoemieDouleurs",
    path: "/noemiedouleurs",
    component: NoemieDouleurs,
  }, 
           {
    name: "NoemieDessert",
    path: "/noemiedessert",
    component: NoemieDessert,
  }, 
           {
    name: "NoemieSeLaver",
    path: "/noemieselaver",
    component: NoemieSeLaver,
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
