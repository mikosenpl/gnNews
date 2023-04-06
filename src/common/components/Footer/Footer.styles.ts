import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-top: 2px solid ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.body};

  ${({ theme }) => theme.mq.desktop} {
    grid-row: 3 / 3;
    grid-column: 1 / 3;
    justify-content: flex-end;
  }

  ${({ theme }) => theme.mq.smartphone} {
    grid-row: 4 / 5;
    grid-column: 1 / 1;
    justify-content: center;
  }
`;

export const FooterCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.mq.desktop} {
    width: 40%;
  }

  ${({ theme }) => theme.mq.smartphone} {
    width: 70%;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    width: 30%;
  }

  ${({ theme }) => theme.mq.smartphone} {
    width: 30%;
  }
`;

export const FooterText = styled(Paragraph)`
  padding: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.body};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  ${({ theme }) => theme.mq.smartphone} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const CounterNewsText = styled(Paragraph)`
  padding: 5px 15px 0 0;
  text-align: right;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
