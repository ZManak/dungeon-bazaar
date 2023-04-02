import React from "react";
import { shallow } from "enzyme";
import CounterContainter from "./CounterContainter";

describe("CounterContainter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CounterContainter />);
    expect(wrapper).toMatchSnapshot();
  });
});
