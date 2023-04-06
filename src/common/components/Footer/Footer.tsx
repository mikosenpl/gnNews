import { useSelector } from 'react-redux';
import {
  FooterWrapper,
  FooterCenter,
  FooterText,
  FooterRight,
  CounterNewsText,
} from './Footer.styles';
import { RootState } from '../../store/store';
import { useCurrentDate } from '../hooks/useCurrentDate';

const Footer = () => {
  const currentDate = useCurrentDate();
  const totalResults: number = useSelector(
    (state: RootState) => state.display.totalResults
  );
  const perPageResults: number = useSelector(
    (state: RootState) => state.pagination.perPageResults
  );
  const currentPage: number = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const formattedDate = currentDate.toLocaleDateString([], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <FooterWrapper>
      <FooterCenter>
        <FooterText>{`${formattedDate}, ${formattedTime}. `}</FooterText>
        <FooterText>Made with ❤️ by Michał Kikoła</FooterText>
      </FooterCenter>
      <FooterRight>
        <CounterNewsText>
          {totalResults === 0 ? 0 : perPageResults * currentPage}/{totalResults}
        </CounterNewsText>
      </FooterRight>
    </FooterWrapper>
  );
};

export default Footer;
