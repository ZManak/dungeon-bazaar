import React from "react";
import { shallow } from "enzyme";
import Grid from "./Grid";

describe("Grid", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Grid />);
    expect(wrapper).toMatchSnapshot();
  });
});
