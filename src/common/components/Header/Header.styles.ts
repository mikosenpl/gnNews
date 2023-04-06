import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

export const HeaderWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.body};
`;

export const Logo = styled(Paragraph)`
  text-align: center;
  justify-content: center;
  font-weight: 900;
  margin-bottom: 0 !important;
  color: ${({ theme }) => theme.colors.tertiary};

  ${({ theme }) => theme.mq.desktop} {
    padding-left: 20px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  ${({ theme }) => theme.mq.smartphone} {
    padding-left: 5px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;

  ${({ theme }) => theme.mq.desktop} {
    width: 150px;
  }

  ${({ theme }) => theme.mq.smartphone} {
    width: 120px;
  }
`;

export const ButtonImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  padding-top: 3px;
  border: 2px solid ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.body};

  ${({ theme }) => theme.mq.desktop} {
    font-size: 40px;
  }

  ${({ theme }) => theme.mq.smartphone} {
    font-size: 25px;
    padding: 5px;
  }
`;

export const RightSideHeader = styled.div`
  height: 100%;

  ${({ theme }) => theme.mq.desktop} {
    width: 7rem;
  }

  ${({ theme }) => theme.mq.smartphone} {
    width: 5rem;
  }
`;

export const Languages = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  gap: 10px;
`;

export const ModalBody = styled.div`
  display: flex;
  padding: 15px;
  font-size: 20px;
`;
