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

  it('displays the correct publication time', () => {
    const { getByText } = render(
      <AppProviders>
        <NewsCard article={testArticle} />
      </AppProviders>
    );
    const date = new Date(testArticle.publishedAt ?? '');
    const minute = date.getUTCMinutes();
    const hour = date.getUTCHours().toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    const formattedDate = !isNaN(minute)
      ? `, ${hour}:${minute} - ${day}.${month}.${year}`
      : '';
    expect(
      getByText(testArticle.source.name + formattedDate)
    ).toBeInTheDocument();
  });

  it('opens modal on click', () => {
    const { getByAltText, getByLabelText } = render(
      <AppProviders>
        <NewsCard article={testArticle} />
      </AppProviders>
    );

    fireEvent.click(getByAltText('image'));

    expect(getByLabelText('Close')).toBeInTheDocument();
  });
});
