import { render, fireEvent } from '@testing-library/react';
import Header from './Header';
import { store } from '../../store/store';
import i18n from '../../../i18n';
import { lightTheme } from '../../assets/styles/theme';
import AppProviders from '../../providers/AppProviders';
import { I18nextProvider } from 'react-i18next';

describe('Header component', () => {
  it('renders logo correctly', () => {
    const { getByText } = render(
      <AppProviders>
        <Header />
      </AppProviders>
    );
    const logoElement = getByText('gnNews');
    expect(logoElement).toBeInTheDocument();
  });

  it('changes display method to cards when button is clicked', () => {
    const { getByTestId } = render(
      <AppProviders>
        <Header />
      </AppProviders>
    );
    const cardsButton = getByTestId('cards-button');
    fireEvent.click(cardsButton);
    expect(store.getState().display.method).toBe('cards');
    expect(cardsButton).toHaveStyle(`color: ${lightTheme.colors.tertiary}`);
  });

  it('changes display method to list when button is clicked', () => {
    const { getByTestId } = render(
      <AppProviders>
        <Header />
      </AppProviders>
    );
    const listButton = getByTestId('list-button');
    fireEvent.click(listButton);
    expect(store.getState().display.method).toBe('list');
    expect(listButton).toHaveStyle(`color: ${lightTheme.colors.tertiary}`);
  });

  it('changes display language to Polish when flag is clicked', () => {
    const { getByAltText } = render(
      <AppProviders>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </AppProviders>
    );
    const polishFlag = getByAltText('polish-flag');
    fireEvent.click(polishFlag);
    expect(store.getState().display.language).toBe('pl');
    expect(polishFlag).toHaveStyle(
      `border: 2px solid ${lightTheme.colors.tertiary}`
    );
  });
});
