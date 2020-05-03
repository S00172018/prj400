import { shallowMount } from "@vue/test-utils";
import Todos from "@/components/Todos.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const task = "new task";
    const wrapper = shallowMount(Todos, {
      propsData: { task },
    });
    expect(wrapper.text()).toMatch(task);
  });
});
