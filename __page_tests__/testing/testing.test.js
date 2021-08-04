import Testing from "../../pages/testing";
import { render } from "@testing-library/react";
import { ToasterProvider } from "@/context/toaster";

describe("The Testing Page Component", () => {
  it("should render text Testing page", () => {
    const { getByText } = render(
      <ToasterProvider>
        <Testing />
      </ToasterProvider>
    );
    const txtTesting = getByText("Testing Page");

    expect(txtTesting).toBeInTheDocument();
  });
});
