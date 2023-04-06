import styled from 'styled-components';

export const MainTemplateWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  display: grid;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-rows: 100px 1fr 70px;
    grid-template-columns: 300px 1fr;
  }

  ${({ theme }) => theme.mq.smartphone} {
    grid-template-rows: 100px 40px 1fr 70px;
    grid-template-columns: 1fr;
  }
`;
