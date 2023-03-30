import { Typography } from "antd";
import styled from "styled-components";

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

  @media only screen and (min-width: 768px) {
    grid-row: 3 / 3;
    grid-column: 1 / 3;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 767px) {
    grid-row: 4 / 5;
    grid-column: 1 / 1;
    justify-content: center;
  }
`;

export const FooterCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }

  @media only screen and (max-width: 767px) {
    width: 70%;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 30%;
  }

  @media only screen and (max-width: 767px) {
    width: 30%;
  }
`;

export const FooterText = styled(Paragraph)`
  padding: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.body};

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media only screen and (max-width: 767px) {
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
