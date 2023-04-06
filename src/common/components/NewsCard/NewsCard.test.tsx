import { render, fireEvent } from '@testing-library/react';
import NewsCard from './NewsCard';
import { newsMock } from '../../mocks/NewsMock';
import AppProviders from '../../providers/AppProviders';

const testArticle = newsMock.articles[0];

describe('NewsCard component', () => {
  it('renders correctly with card display method', () => {
    const { getByText, getByAltText } = render(
      <AppProviders>
        <NewsCard article={testArticle} />
      </AppProviders>
    );

    expect(getByText(testArticle.title)).toBeInTheDocument();
    expect(getByText(testArticle.description)).toBeInTheDocument();
    expect(getByAltText('image')).toBeInTheDocument();
  });

  it('opens modal on click and closes on cancel', () => {
    const { getByText, getByLabelText } = render(
      <AppProviders>
        <NewsCard article={testArticle} />
      </AppProviders>
    );

    fireEvent.click(getByText(testArticle.title));

    expect(getByText(testArticle.content ?? '')).toBeInTheDocument();

    fireEvent.click(getByLabelText('Close'));
  });

  it('opens external link on ellipsis click', () => {
    const windowOpen = jest.spyOn(window, 'open').mockImplementation();

    const { getByTestId } = render(
      <AppProviders>
        <NewsCard article={testArticle} />
      </AppProviders>
    );
    fireEvent.click(getByTestId('card-news'));
    fireEvent.click(getByTestId('ellipsis-button'));

    expect(windowOpen).toHaveBeenCalledWith(testArticle.url, '_blank');

    windowOpen.mockRestore();
  });
});
