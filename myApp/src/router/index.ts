import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Accueil from "@/views/Accueil.vue";
import AdminAccueil from "@/views/AdminAccueil.vue";
import Noemie from "@/views/Noemie.vue";
import ModalTest from "@/views/ModalTest.vue";
import Nourriture from "@/views/Nourriture.vue";
import Actions from "@/views/Actions.vue";
import Actions2 from "@/views/Actions2.vue";
import Humeur from "@/views/Humeur.vue";
import Interlocuteur from "@/views/Interlocuteur.vue";
import DebutPhrase from "@/views/DebutPhrase.vue";
import Soin from "@/views/Soin.vue";
import Fruits from "@/views/Fruits.vue"
import Plats from "@/views/Plats.vue";
import Legumes from "@/views/Legumes.vue";
import Boissons from "@/views/Boissons.vue";
import Wc from "@/views/Wc.vue";
import Mobilier from "@/views/Mobilier.vue";
import Loisirs from "@/views/Loisirs.vue";
import Vetements from "@/views/Vetements.vue";
import Corps from "@/views/Corps.vue";
import Douleurs from "@/views/Douleurs.vue";
import Dessert from "@/views/Dessert.vue";
import SeLaver from "@/views/SeLaver.vue";
import Objets from "@/views/Objets.vue";
import Recapitulatif from "@/views/Recapitulatif.vue";

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
    name: "Noemie",
    path: "/noemie",
    component: Noemie,
  },
   {
    name: "Nourriture",
    path: "/nourriture",
    component: Nourriture,
  },
     {
    name: "Accueil",
    path: "/accueil",
    component: Accueil,
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
    name: "Humeur",
    path: "/humeur",
    component: Humeur,
  },

  {
    name: "Soin",
    path: "/soin",
    component: Soin,
  },
     {
    name: "Interlocuteur",
    path: "/interlocuteur",
    component: Interlocuteur,
  },  
     {
    name: "DebutPhrase",
    path: "/debutphrase",
    component: DebutPhrase,
  },  
     {
    name: "Fruits",
    path: "/fruits",
    component: Fruits,
  },  
       {
    name: "Plats",
    path: "/plats",
    component: Plats,
  }, 
       {
    name: "Legumes",
    path: "/legumes",
    component: Legumes,
  }, 
         {
    name: "Boissons",
    path: "/boissons",
    component: Boissons,
  },  
           {
    name: "Wc",
    path: "/wc",
    component: Wc,
  },  
           {
    name: "Mobilier",
    path: "/mobilier",
    component: Mobilier,
  }, 
           {
    name: "Loisirs",
    path: "/loisirs",
    component: Loisirs,
  }, 
           {
    name: "Vetements",
    path: "/vetements",
    component: Vetements,
  }, 
           {
    name: "Corps",
    path: "/corps",
    component: Corps,
  }, 
           {
    name: "Douleurs",
    path: "/douleurs",
    component: Douleurs,
  }, 
           {
    name: "Dessert",
    path: "/dessert",
    component: Dessert,
  }, 
           {
    name: "SeLaver",
    path: "/selaver",
    component: SeLaver,
  }, 
             {
    name: "Objets",
    path: "/objets",
    component: Objets,
  }, 
               {
    name: "Recapitulatif",
    path: "/recapitulatif",
    component: Recapitulatif,
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
