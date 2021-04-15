import {shallowMount} from "@vue/test-utils";
import EstablishmentCard from "../../src/components/EstablishmentCard.vue";

describe("EstablishmentCard.vue", () => {
	it("renders correctly", () => {
		const name = "It works !";

		const wrapper = shallowMount(EstablishmentCard, {
			propsData: {
				name,
			},
		});

		expect(wrapper.name()).toMatch(name);
	});
});
