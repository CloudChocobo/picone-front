/*import Api from "@/services/api";

export default {
	namespaced: true,
	state: {
		establishment: [],
	},
	mutations: {
		SET_ESTABLISHMENT(state, establishment) {
			state.establishment = establishment;
		},
		ADD_ESTABLISHMENTS(state, establishments) {
			let establishment = state.establishment.concat(establishments);
			state.establishment = establishment;
		},
		DELETE_ESTABLISHMENTS(state, establishmentsId) {
			let establishment = state.establishment.filter((v) => v.id != establishmentsId);
			state.establishment = establishment;
		},
		EDIT_ESTABLISHMENTS(state, establishments) {
			let v = state.establishment.find((v) => v.id == establishments.id);
			v = establishments;
		},
	},
	actions: {
		async loadAll({commit, dispatch}) {
			let response = await Api().get("/establishments");
			let establishment = response.data.data;
			establishment.forEach((v) => {
				v.attributes.tag_ids = v.relationships.tags.data.map((t) => t.id);
			});

			commit(
				"SET_ESTABLISHMENT",
				establishment.map((v) => v.attributes)
			);
		},
		async create({commit}, establishments) {
			let response = await Api().post("/add/establishment", establishments);
			let savedEstablishments = response.data.data.attributes;
			commit("ADD_ESTABLISHMENTS", savedEstablishments);
			return savedEstablishments;
		},
		async delete({commit}, establishments) {
			let response = await Api().delete(`/delete/establishments/${establishments.id}`);
			if (response.status == 200) {
				commit("DELETE_ESTABLISHMENTS", establishments.id);
			}
		},
		async edit({commit}, establishments) {
			let response = await Api().put(
				`/update/establishments/${establishments.id}`,
				establishments
			);
			let newEstablishments = response.data.data.attributes;
			commit("EDIT_ESTABLISHMENTS", newEstablishments);
			return newEstablishments;
		},
	},
};
*/
