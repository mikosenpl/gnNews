import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  FooterWrapper,
  FooterCenter,
  FooterText,
  FooterRight,
  CounterNewsText,
} from "./Footer.styles";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const totalResults: number = useSelector(
    (state: any) => state.display.totalResults
  );
  const perPageResults: number = useSelector(
    (state: any) => state.display.perPageResults
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = currentDate.toLocaleDateString([], { weekday: "long" });

  return (
    <FooterWrapper>
      <FooterCenter>
        <FooterText>{`${formattedTime}, ${formattedDate}`}</FooterText>
        <FooterText>Made with ❤️ by Michał Kikoła</FooterText>
      </FooterCenter>
      <FooterRight>
        <CounterNewsText>
          {totalResults === 0 ? 0 : perPageResults}/{totalResults}
        </CounterNewsText>
      </FooterRight>
    </FooterWrapper>
  );
};

export default Footer;
