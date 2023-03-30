import { Button, Drawer, Typography } from "antd";
import styled from "styled-components";

const { Paragraph } = Typography;

export const SideBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.body};
  border-right: 2px solid ${({ theme }) => theme.colors.body};

  @media only screen and (min-width: 768px) {
    grid-row: 2 / 4;
    grid-column: 1 / 1;
  }

  @media only screen and (max-width: 767px) {
    grid-row: 2 / 3;
    grid-column: 1 / 1;
    justify-content: right;
    text-align: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavigationArrow = styled.div`
  font-size: 40px;
  transform: translateX(-150px);
  transition: transform 0.3s 0.1s ease-in-out;
  color: ${({ theme }) => theme.colors.tertiary};

  &.navigation-arrow--active {
    transform: translateX(0px);
  }
`;

export const Navigation = styled.div`
  display: flex;
  height: 100%;
  width: 250px;
  transform: translateX(-150px);
  transition: transform 0.3s 0.1s ease-in-out;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};

  &.navigation--active {
    transform: translateX(0px);
  }
`;

export const NavigationItem = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 10px;
`;

export const NavigationItemActive = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 10px;
  border: 5px solid ${({ theme }) => theme.colors.tertiary};
`;

export const CountryFlag = styled.div`
  width: 30%;
  height: 100%;
`;

export const ChangeCountryText = styled(Paragraph)`
  text-align: center;
  font-weight: 900;
  margin-bottom: 0 !important;
  padding-left: 20px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.body};
`;

export const ChangeLanguageButton = styled(Button)`
  color: black;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const ChangeLanguageMenu = styled(Drawer)`
  background-color: ${({ theme }) => theme.colors.primary} !important;
`;
