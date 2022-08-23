import Home from "../pages/index.js";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Index page", () => {
  it("should render", () => {
    render(<Home />);
    
  });
    
    
});