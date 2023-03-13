import React from "react";
import { shallow } from "enzyme";
import Redux from "./Redux";

describe("Redux", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Redux />);
    expect(wrapper).toMatchSnapshot();
  });
});
