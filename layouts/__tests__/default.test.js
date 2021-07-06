import { render } from "@testing-library/react";
import DefaultLayout from "../default.js";

describe("DefaultLayout Component", () => {
  it("should render text Home page", () => {
    const { getByText } = render(<DefaultLayout>children</DefaultLayout>);
    const txtHeader = getByText("Website Name");

    expect(txtHeader).toBeInTheDocument();
  });
});
