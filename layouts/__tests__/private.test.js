import { render } from "@testing-library/react";
import PrivateLayout from "../private.js";

describe("PrivateLayout Component", () => {
  it("should render text Home page", () => {
    const { getByText } = render(<PrivateLayout>children</PrivateLayout>);
    const txtHeader = getByText("Dashboard");

    expect(txtHeader).toBeInTheDocument();
  });
});
