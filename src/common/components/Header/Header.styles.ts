import { Typography } from "antd";
import styled from "styled-components";

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

  @media only screen and (min-width: 768px) {
    padding-left: 20px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media only screen and (max-width: 767px) {
    padding-left: 5px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;

  @media only screen and (min-width: 768px) {
    width: 150px;
  }

  @media only screen and (max-width: 767px) {
    width: 50px;
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

  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 25px;
    padding: 5px;
  }
`;

export const RightSideHeader = styled.div`
  width: 100px;
  height: 100%;
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
