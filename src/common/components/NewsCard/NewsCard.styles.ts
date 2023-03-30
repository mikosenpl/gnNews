import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

export const BottomCard = styled(Meta)`
  display: flex;
  text-align: end;
  font-weight: 700;
`;

export const CardNews = styled(Card)`
  @media only screen and (min-width: 768px) {
    width: 30vw;
  }

  @media only screen and (max-width: 767px) {
    width: 90vw;
  }
`;

export const ListNews = styled(Card)`
  @media only screen and (min-width: 768px) {
    width: "100%";
  }

  @media only screen and (max-width: 767px) {
    width: 90vw;
  }
`;
