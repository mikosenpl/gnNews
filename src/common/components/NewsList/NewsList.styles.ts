import styled from "styled-components";

export const NewsListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.body};

  @media only screen and (min-width: 768px) {
    grid-row: 2 / 2;
    grid-column: 2 / 2;
    padding: 25px 150px;
    gap: 40px;
  }

  @media only screen and (max-width: 767px) {
    grid-row: 3 / 4;
    grid-column: 1 / 1;
    padding: 15px;
    gap: 20px;
  }
`;
