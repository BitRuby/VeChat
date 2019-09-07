import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Signup } from "./Signup";
import { Redirect } from "react-router-dom";
configure({ adapter: new Adapter() });
let wrapper;
describe("<Signup />", () => {
  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });
  it("Shouldn't render <Redirect to/> when authenticated state is false", () => {
    wrapper = shallow(<Signup />);
    expect(wrapper.find(Redirect)).toHaveLength(0);
  });

  it("Should render <Redirect to/> when authenticated state is true", () => {
    wrapper.setProps({ submitted: true });
    expect(wrapper.find(Redirect)).toHaveLength(0);
  });
});
