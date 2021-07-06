import Settings from "../../pages/settings";
import { render } from "@testing-library/react";

describe("The Settings Page Component", () => {
  it("should render text Settings page", () => {
    const { getByText } = render(<Settings />);
    const txtSettings = getByText("Settings Page");

    expect(txtSettings).toBeInTheDocument();
  });
});
