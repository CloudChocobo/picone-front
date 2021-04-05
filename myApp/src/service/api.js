/*import axios from "axios";

export default () => {
	let currentUserString = window.localStorage.currentUser;
	let currentUser = currentUserString ? JSON.parse(currentUserString) : "";
	return axios.create({
		baseURL: "http://localhost:8080/api",
		withCredentials: false,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: currentUser && currentUser.token,
		},
	});
};
//export const rootHebergementImage = "https://niveaubonus.fr/picone/src/icones/";

// When online =>
// export const rootAPI = "https://piconebackend.herokuapp.com/";

// When Localhost =>
//export const rootAPI = "http://localhost:8080/";

//export const relationTest = "besoins_physiologiques";

//export const labelTest = "moods";
*/
