/* index where the routes are declared*/
import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";

import Home from "@/views/Home.vue";
import AdminHome from "@/views/AdminHome.vue";
import Recap from "@/views/Recap.vue";
import StartTalking from "@/views/StartTalking.vue";
import RecapDiscussion from "@/views/RecapDiscussion.vue";
import SentenceBuild from "@/views/SentenceBuild.vue";
import Patients from "@/views/Patients.vue";
import Mood from "@/views/Mood.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Establishment from "@/views/Establishment.vue";
import About from "@/views/About.vue";
import UiParameter from "@/views/UiParameter.vue"


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
	
	{
		name: "AdminHome",
		path: "/adminHome",
		component: AdminHome,
	},
	{
		name: "Patients",
		path: "/patients",
		component: Patients,
	},
	{
		name: "Establishment",
		path: "/establishment",
		component: Establishment,
	},
	{
		name: "StartTalking",
		path: "/startTalking",
		component: StartTalking,
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
		name: "Recap",
		path: "/recap",
		component: Recap,
	},
	{
		name: "RecapDiscussion",
		path: "/recapDiscussion",
		component: RecapDiscussion,
	},
		{
		name: "About",
		path: "/about",
		component: About,
	},
	{
		name: "UiParameters",
		path: "/uiparameters",
		component: UiParameter,
	},
];

	// {
	//   name: "Care",
	//   path: "/care",
	//   component: Care,
	// },
	//    {
	//   name: "Interlocutor",
	//   path: "/interlocutor",
	//   component: Interlocutor,
	// },
	//    {
	//   name: "Fruits",
	//   path: "/fruits",
	//   component: Fruits,
	// },
	//      {
	//   name: "Dishes",
	//   path: "/dishes",
	//   component: Dishes,
	// },
	//      {
	//   name: "Veggetables",
	//   path: "/veggetables",
	//   component: Veggetables,
	// },
	//        {
	//   name: "SentenceBuild",
	//   path: "/sentencebuild",
	//   component: Drinks,
	// },
	//          {
	//   name: "Wc",
	//   path: "/wc",
	//   component: Wc,
	// },
	//          {
	//   name: "Furniture",
	//   path: "/furniture",
	//   component: Furniture,
	// },
	//          {
	//   name: "Hobbies",
	//   path: "/hobbies",
	//   component: Hobbies,
	// },
	//          {
	//   name: "Clothes",
	//   path: "/clothes",
	//   component: Clothes,
	// },
	//          {
	//   name: "Body",
	//   path: "/body",
	//   component: Body,
	// },
	//          {
	//   name: "Pain",
	//   path: "/pain",
	//   component: Pain,
	// },

	//          {
	//   name: "Hygiene",
	//   path: "/hygiene",
	//   component: Hygiene,
	// },
	//            {
	//   name: "Objects",
	//   path: "/objects",
	//   component: Objects,
	// },



const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
