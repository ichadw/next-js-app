import Dashboard from "../../pages/dashboard";
import { render } from "@testing-library/react";

describe("The Dashboard Page Component", () => {
  it("should render text Dashboard page", () => {
    const { getByText } = render(<Dashboard />);
    const txtDashboard = getByText("Dashboard Page");

    expect(txtDashboard).toBeInTheDocument();
  });
});
