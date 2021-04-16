import {
    shallowMount
} from "@vue/test-utils";
import PatientCard from "@/components/PatientCard.vue";

describe("PatientCard.vue", () => {
    it("renders correctly", () => {
        const lastName = "It works !";

        const wrapper = shallowMount(PatientCard, {
            propsData: {
                lastName
            },
        });
        expect(wrapper.text()).toMatch(lastName);
    });
});