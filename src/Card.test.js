import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer";

describe("Card component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI As expected", () => {
    const tree = renderer.create(<Card name="Card" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
