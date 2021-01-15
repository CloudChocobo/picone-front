import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Accueil from "@/views/Accueil.vue";
import Humeur from "@/views/Humeur.vue";
import Theme from "@/views/Theme.vue";
import EcranZero from "@/views/EcranZero.vue";



const routes: Array<RouteRecordRaw> = [
{
		path: "",
    redirect: "/home",
    component: Accueil,
	},

  {
    name: "home",
    path: "/home",
    component: Accueil,
  },
  {
    name: "Humeur",
    path: "/Humeur",
    component: Humeur,
  },
  {
    name: "Theme",
    path: "/Theme",
    component: Theme,
  },
  {
    name: "EcranZero",
    path: "/EcranZero",
    component: EcranZero,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
