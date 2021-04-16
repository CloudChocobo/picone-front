import {
    mount
} from "@vue/test-utils";
import ModalPatient from "@/components/ModalPatient.vue";

test("calls save when save button is clicked ", async() => {
    const wrapper = mount(ModalPatient, {
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