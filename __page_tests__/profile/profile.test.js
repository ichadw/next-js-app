import Profile from "../../pages/profile";
import { render } from "@testing-library/react";
import { ToasterProvider } from "@/context/toaster";

describe("The Profile Page Component", () => {
  it("should render text Profile page", () => {
    const { getByText } = render(
      <ToasterProvider>
        <Profile />
      </ToasterProvider>
    );
    const txtProfile = getByText("Profile Page");

    expect(txtProfile).toBeInTheDocument();
  });
});
