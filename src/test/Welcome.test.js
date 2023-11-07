import { describe } from "vitest";
import { render } from "@testing-library/react";
import Welcome from "../components/Welcome.jsx";

describe("Welcome", () => {
  it("First Test", () => {
    render(<Welcome />);
  });
});
