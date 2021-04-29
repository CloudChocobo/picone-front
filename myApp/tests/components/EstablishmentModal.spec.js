import {mount} from "@vue/test-utils";
import EstablishmentModal from "../../src/components/EstablishmentModal.vue";

test("calls save when save button is clicked ", async () => {
    const wrapper = mount(EstablishmentModal, {
        propsData: {
            isOpen: {
                name: "isOpen",
                completed: false,
            },
        },
    });

    const save = jest.fn();
    wrapper.vm.save = save;

    await wrapper.find("ion-button").trigger("click");
    expect(save).toHaveBeenCalled();
});