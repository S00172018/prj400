import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
import Todos from "@/components/Todos.vue";
import getTaskPropsData from "./test-utils";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

//Renders event
describe("Todos.vue", () => {
  it("renders event when passed", () => {
    const task = "Title";
    const wrapper = shallowMount(Todos, {
      propsData: { task },
    });
    expect(wrapper.text()).toMatch(task);
  });

  //Checks if Vue instance
  describe("Todos Component unit tests: ", () => {
    test("is a Vue instance", () => {
      const wrapper = shallowMount(Todos, getTaskPropsData());

      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });

  //Checks for event title
  test("renders event title", () => {
    const eventTitle = "Title";

    const wrapper = shallowMount(Todos, getTaskPropsData());

    expect(wrapper.html()).toContain(eventTitle);
  });

  //Checks for delete
  test("calls delete method when the delete button is clicked", () => {
    const wrapper = mount(Todos, getTaskPropsData());

    wrapper.find("#cal-modal").exists();
  });
});
