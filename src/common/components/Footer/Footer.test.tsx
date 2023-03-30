import { act, render } from "@testing-library/react";
import AppProviders from "../../providers/AppProviders";
import {
  setDisplayPerPageResults,
  setDisplayTotalResults,
  store,
} from "../../store";
import Footer from "./Footer";

describe("Footer component", () => {
  it("displays formatted date and time", () => {
    const { getByText } = render(
      <AppProviders>
        <Footer />
      </AppProviders>
    );
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedDate = currentDate.toLocaleDateString([], {
      weekday: "long",
    });
    const expectedText = `${formattedTime}, ${formattedDate}`;
    expect(getByText(expectedText)).toBeInTheDocument();
  });

  it("displays correct news counter", () => {
    const totalResults = 10;
    const perPageResults = 5;

    const { getByText } = render(
      <AppProviders>
        <Footer />
      </AppProviders>
    );

    act(() => {
      store.dispatch(setDisplayTotalResults(totalResults));
      store.dispatch(setDisplayPerPageResults(perPageResults));
    });
    const expectedText = `${perPageResults}/${totalResults}`;
    expect(getByText(expectedText)).toBeInTheDocument();
  });
});
