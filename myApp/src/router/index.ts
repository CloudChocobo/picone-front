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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
