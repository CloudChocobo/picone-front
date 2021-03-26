/* index where the routes are declared*/
import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";

import Home from "@/views/Home.vue";
import AdminHome from "@/views/AdminHome.vue";
// import Recap from "@/views/Recap.vue";
//import RecapDiscussion from "@/views/RecapDiscussion.vue";
import SentenceBuild from "@/views/SentenceBuild.vue";
import Patient from "@/views/Patient.vue";


const routes: Array<RouteRecordRaw> = [
	{
		path: "",
		redirect: "/home",
	},
	{
		name: "Home",
		path: "/home",
		component: Home,
	},
	{
		name: "AdminHome",
		path: "/adminHome",
		component: AdminHome,
	},
	{
		name: "SentenceBuild",
		path: "/build",
		component: SentenceBuild,
	},

	//        {
	//   name: "RecapDiscussion",
	//   path: "/recapDiscussion",
	//   component: RecapDiscussion,
	// },

	//              {
	//   name: "Recap",
	//   path: "/recap",
	//   component: Recap,
	// },
		{
		name: "Patient",
		path: "/patients",
		component: Patient,
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
