import {
  MainContentWrapper,
  NewsListWrapper,
  PaginationWrapper,
} from './NewsList.styles';
import { Article, NewsRequest } from '../../models/News';
import NewsCard from '../NewsCard/NewsCard';
import { useEffect, useState } from 'react';
import { useGetNews } from '../../queries/useGetNews';
import { Country } from '../../models/Country';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dropdown,
  MenuProps,
  Pagination,
  PaginationProps,
  Space,
  Spin,
} from 'antd';
import { RootState } from '../../store/store';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { setDisplayTotalResults } from '../../store/slices/display/displaySlice';
import {
  setPaginationPerPageResults,
  setPaginationCurrentPage,
} from '../../store/slices/pagination/paginationSlice';

const NewsList = () => {
  const [allArticle, setAllArticle] = useState<Article[]>();

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const displayCountry: Country = useSelector(
    (state: RootState) => state.display.country
  );
  const currentPage: number = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const totalResults: number = useSelector(
    (state: RootState) => state.display.totalResults
  );
  const perPageResults: number = useSelector(
    (state: RootState) => state.pagination.perPageResults
  );

  const newsRequest: NewsRequest = {
    country: displayCountry.code,
    page: currentPage,
    pageSize: perPageResults,
  };
  const news = useGetNews(newsRequest);

  useEffect(() => {
    news.refetch();
  }, [displayCountry.code, currentPage, perPageResults]);

  useEffect(() => {
    if (news.isSuccess && news.data) {
      setAllArticle(news.data.articles);
      dispatch(setDisplayTotalResults(news.data.totalResults));
    }
  }, [news]);

  const onPaginationDropdownClick: MenuProps['onClick'] = ({ key }) => {
    dispatch(setPaginationPerPageResults(parseInt(key)));
  };

  const onPaginationChange: PaginationProps['onChange'] = (page) => {
    dispatch(setPaginationCurrentPage(page));
  };

  const itemsPagination: MenuProps['items'] = [
    {
      label: `6 / ${t('page')}`,
      key: 6,
    },
    {
      label: `12 / ${t('page')}`,
      key: 12,
    },
    {
      label: `18 / ${t('page')}`,
      key: 18,
    },
    {
      label: `24 / ${t('page')}`,
      key: 24,
    },
    {
      label: `30 / ${t('page')}`,
      key: 30,
    },
  ];

  return (
    <MainContentWrapper>
      <NewsListWrapper key={displayCountry.code}>
        {allArticle ? (
          allArticle.map((article: Article) => {
            return <NewsCard key={article.publishedAt} article={article} />;
          })
        ) : (
          <Spin tip="Loading Articles" size="large" />
        )}
      </NewsListWrapper>
      <PaginationWrapper>
        {allArticle ? (
          <>
            <Pagination
              current={currentPage}
              onChange={onPaginationChange}
              pageSize={perPageResults}
              total={totalResults}
            />
            <Dropdown
              menu={{
                items: itemsPagination,
                onClick: onPaginationDropdownClick,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {perPageResults} / {t('page')}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </>
        ) : (
          <Spin tip="Loading Pagination" size="large" />
        )}
      </PaginationWrapper>
    </MainContentWrapper>
  );
};

export default NewsList;
