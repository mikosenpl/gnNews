import { QueryClient, useQuery } from "react-query";
import axiosInstance from "../api/axios";
import { NewsRequest, NewsResponse } from "../models/News";

export const useGetNews = (newsRequest: NewsRequest) => {
  return useQuery<NewsResponse>(["NewsList"], () => fetchNews(newsRequest));
};

export const invalidateNews = (queryClient: QueryClient) => {
  queryClient.invalidateQueries("NewsList");
};

const fetchNews = async (newsRequest: NewsRequest) => {
  const response = await axiosInstance.get<NewsResponse>("/top-headlines", {
    params: {
      apiKey: process.env.REACT_APP_API_KEY,
      country: newsRequest.country,
      pageSize: newsRequest.pageSize,
      page: newsRequest.page,
      q: newsRequest.q,
    },
  });
  return response.data;
};
