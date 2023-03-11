import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

describe("CardList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardList />);
    expect(wrapper).toMatchSnapshot();
  });
});
