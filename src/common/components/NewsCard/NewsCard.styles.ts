import { Card } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;

export const BottomCard = styled(Meta)`
  display: flex;
  text-align: end;
  font-weight: 700;
`;

export const CardNews = styled(Card)`
  ${({ theme }) => theme.mq.desktop} {
    width: 25vw;
  }

  ${({ theme }) => theme.mq.smartphone} {
    width: 90vw;
  }
`;

export const ListNews = styled(Card)`
  ${({ theme }) => theme.mq.desktop} {
    width: '100%';
  }

  ${({ theme }) => theme.mq.smartphone} {
    width: 90vw;
  }
`;
