import Home from "../pages";
import { render } from "@testing-library/react";

describe("The Home Page Component", () => {
  it("should render text Home page", () => {
    const { getByText } = render(<Home />);
    const txtHome = getByText("Home Page");

    expect(txtHome).toBeInTheDocument();
  });
});
