import { mount } from "@vue/test-utils";
import Task from "@/components/Task.vue";

describe("Task.vue", () => {
  let task = {};
  let icons = {};
  let wrapper;
  beforeEach(() => {
    task = {
      id: 1,
      text: "Dentist",
      completed: true,
    };
    icons = {};
    wrapper = mount(Task, {
      props: { task, icons },
    });
  });

  it("is instantiated", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render Task text", () => {
    expect(wrapper.text()).toContain("Dentist");
  });

  it("should be marked as completed with line through", () => {
    expect(wrapper.get('[data-test="todo-checkbox"]').classes()).toContain(
      "line-through"
    );
  });

  it("should trigger a toggle-completed event when clicked", async () => {
    const onClick = jest.fn();
    task = {
      id: 1,
      text: "Dentist",
      completed: true,
    };
    icons = {};
    wrapper = mount(Task, {
      props: { task, icons },
      propsData: { onClick },
    });

    const checkbox = wrapper.get('[data-test="todo-checkbox"]');
    await checkbox.trigger("click");

    expect(onClick).toHaveBeenCalled();
    expect(wrapper.emitted()).toHaveProperty("toggle-completed");
  });

  it("should not be marked as completed if completed is false", () => {
    task = {
      id: 1,
      text: "Dentist",
      completed: false,
    };
    icons = {};
    wrapper = mount(Task, {
      props: { task, icons },
    });
    expect(
      wrapper.get('[data-test="todo-checkbox"]').classes("line-through")
    ).toBe(false);
  });
});
