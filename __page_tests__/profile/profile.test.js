import Profile from "../../pages/profile";
import { render } from "@testing-library/react";

describe("The Profile Page Component", () => {
  it("should render text Profile page", () => {
    const { getByText } = render(<Profile />);
    const txtProfile = getByText("Profile Page");

    expect(txtProfile).toBeInTheDocument();
  });
});
