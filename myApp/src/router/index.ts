import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Interlocuteur from "@/views/Interlocuteur.vue";
import Humeur from "@/views/Humeur.vue";
import Theme from "@/views/Theme.vue";
import Accueil from "@/views/Accueil.vue";
import AdminAccueil from "@/views/AdminAccueil.vue";


const routes: Array<RouteRecordRaw> = [
{
		path: "",
    redirect: "/accueil",
    component: Accueil,
	},
  {
    name: "AdminAccueil",
    path: "/Adminaccueil",
    component: AdminAccueil,
  },
  {
    name: "Interlocuteur",
    path: "/interlocuteur",
    component: Interlocuteur,
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
    name: "Accueil",
    path: "/accueil",
    component: Accueil,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
