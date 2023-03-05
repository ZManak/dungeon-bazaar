import React from "react";
import { shallow } from "enzyme";
import Buttons from "./Buttons";

describe("Buttons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Buttons />);
    expect(wrapper).toMatchSnapshot();
  });
});
