import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Accueil from "@/views/Accueil.vue";
import Humeur from "@/views/Humeur.vue";
import Theme from "@/views/Theme.vue";
import EcranZero from "@/views/EcranZero.vue";



const routes: Array<RouteRecordRaw> = [
{
		path: "",
    redirect: "/accueil",
    component: Accueil,
	},

  {
    name: "home",
    path: "/accueil",
    component: Accueil,
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
    name: "EcranZero",
    path: "/ecranzero",
    component: EcranZero,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
