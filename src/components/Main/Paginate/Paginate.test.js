import React from "react";
import { shallow } from "enzyme";
import Paginate from "./Paginate";

describe("Paginate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Paginate />);
    expect(wrapper).toMatchSnapshot();
  });
});
