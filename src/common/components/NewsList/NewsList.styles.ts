import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.body};

  ${({ theme }) => theme.mq.desktop} {
    grid-row: 2 / 2;
    grid-column: 2 / 2;
    padding: 3rem;
  }

  ${({ theme }) => theme.mq.smartphone} {
    grid-row: 3 / 4;
    grid-column: 1 / 1;
    padding: 15px;
  }
`;

export const NewsListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
`;
