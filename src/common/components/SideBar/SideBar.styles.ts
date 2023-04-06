import { Button, Drawer, Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

export const SideBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.body};

  ${({ theme }) => theme.mq.desktop} {
    grid-row: 2 / 4;
    grid-column: 1 / 1;
  }

  ${({ theme }) => theme.mq.smartphone} {
    grid-row: 2 / 3;
    grid-column: 1 / 1;
    justify-content: right;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavigationArrow = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  transform: translateX(-9.375rem);
  transition: transform 0.3s 0.1s ease-in-out;
  color: ${({ theme }) => theme.colors.tertiary};

  &.navigation-arrow--active {
    transform: translateX(0rem);
  }
`;

export const Navigation = styled.div`
  display: flex;
  height: 100%;
  width: 250px;
  transform: translateX(-10rem);
  transition: transform 0.3s 0.1s ease-in-out;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-right: 2px solid ${({ theme }) => theme.colors.tertiary};

  &.navigation--active {
    transform: translateX(0rem);
  }
`;

export const NavigationItem = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0.625rem;
`;

export const NavigationItemActive = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0.625rem;
  border: 5px solid ${({ theme }) => theme.colors.tertiary};
`;

export const CountryFlag = styled.div`
  width: 30%;
  height: 100%;
`;

export const ChangeCountryText = styled(Paragraph)`
  font-weight: 900;
  padding-left: 1.25rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.body};
`;

export const ChangeLanguageButton = styled(Button)`
  color: black;
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin: 0.5rem;
`;

export const ChangeLanguageMenu = styled(Drawer)`
  background-color: ${({ theme }) => theme.colors.primary} !important;
`;
