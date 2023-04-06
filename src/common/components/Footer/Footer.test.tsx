import { act, render } from '@testing-library/react';
import AppProviders from '../../providers/AppProviders';
import { store } from '../../store/store';
import Footer from './Footer';
import { setDisplayTotalResults } from '../../store/slices/display/displaySlice';
import { setPaginationCurrentPage } from '../../store/slices/pagination/paginationSlice';

describe('Footer component', () => {
  it('displays formatted date and time', () => {
    const { getByText } = render(
      <AppProviders>
        <Footer />
      </AppProviders>
    );
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const formattedDate = currentDate.toLocaleDateString([], {
      weekday: 'long',
    });
    const expectedText = `${formattedTime}, ${formattedDate}`;
    expect(getByText(expectedText)).toBeInTheDocument();
  });

  it('displays correct news counter', () => {
    const totalResults = 10;
    const perPageResults = 5;

    const { getByText } = render(
      <AppProviders>
        <Footer />
      </AppProviders>
    );

    act(() => {
      store.dispatch(setDisplayTotalResults(totalResults));
      store.dispatch(setPaginationCurrentPage(perPageResults));
    });
    const expectedText = `${perPageResults}/${totalResults}`;
    expect(getByText(expectedText)).toBeInTheDocument();
  });
});
