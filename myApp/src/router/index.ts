/* index where the routes are declared*/
import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";

import Home from "@/views/Home.vue";
import AdminHome from "@/views/AdminHome.vue";
// import Recap from "@/views/Recap.vue";
//import RecapDiscussion from "@/views/RecapDiscussion.vue";
import SentenceBuild from "@/views/SentenceBuild.vue";
import Patients from "@/views/Patients.vue";
import Mood from "@/views/Mood.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";


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
		name: "Register",
		path: "/Register",
		component: Register,
	},
	{
		name: "Login",
		path: "/Login",
		component: Login,
	},
	// {
	//   name: "ModalTest",
	//   path: "/modaltest",
	//   component: ModalTest,
	// },
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
			{
		name: "Mood",
		path: "/mood",
		component: Mood,
	},
		{
		name: "Patients",
		path: "/patients",
		component: Patients,
		}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;


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