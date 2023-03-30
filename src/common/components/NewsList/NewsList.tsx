import { NewsListWrapper } from "./NewsList.styles";
import { Article, NewsRequest } from "../../models/News";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from "react";
import { useGetNews } from "../../queries/useGetNews";
import { Country } from "../../models/Country";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  MenuProps,
  message,
  Pagination,
  PaginationProps,
  Space,
  Spin,
} from "antd";
import { setDisplayPerPageResults, setDisplayTotalResults } from "../../store";
import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const NewsList = () => {
  const [allArticle, setAllArticle] = useState<Article[]>();
  const [currentPage, setCurrentPage] = useState(1);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const displayCountry: Country = useSelector(
    (state: any) => state.display.country
  );
  const totalResults: number = useSelector(
    (state: any) => state.display.totalResults
  );
  const perPageResults: number = useSelector(
    (state: any) => state.display.perPageResults
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

  const onPaginationDropdownClick: MenuProps["onClick"] = ({ key }) => {
    dispatch(setDisplayPerPageResults(parseInt(key)));
  };

  const onPaginationChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  const itemsPagination: MenuProps["items"] = [
    {
      label: `2 / ${t("page")}`,
      key: 2,
    },
    {
      label: `4 / ${t("page")}`,
      key: 4,
    },
    {
      label: `6 / ${t("page")}`,
      key: 6,
    },
    {
      label: `10 / ${t("page")}`,
      key: 10,
    },
    {
      label: `20 / ${t("page")}`,
      key: 20,
    },
  ];

  return (
    <NewsListWrapper key={displayCountry.code}>
      {allArticle ? (
        allArticle.map((article: Article) => {
          return <NewsCard key={article.publishedAt} article={article} />;
        })
      ) : (
        <Spin tip="Loading Articles" size="large" />
      )}

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
                {perPageResults} / {t("page")}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </>
      ) : (
        <Spin tip="Loading Pagination" size="large" />
      )}
    </NewsListWrapper>
  );
};

export default NewsList;
