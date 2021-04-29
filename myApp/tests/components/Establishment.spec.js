/*import {shallowMount, createLocalVue} from "@vue/test-utils";
import Vuex from "vuex";
import Establishment from "@/views/Establishment.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Establishment", () => {
	let getters;
	let store;

	beforeEach(() => {
		getters = {
			establishments: () => [],
		};

		store = new Vuex.Store({
			getters,
		});
	});

	it('Renders "store.getters.inputValue" in first p tag', () => {
		const wrapper = shallowMount(Establishment, {store, localVue});

		expect(wrapper.find("ion-header")).toBeDefined();
	});
});*/
//versioning pb: we should go back to vue 2 to test the store and not use the vue test utils v2
