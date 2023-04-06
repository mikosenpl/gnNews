import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { CountryNews } from '../../common/constants/CountryNews';
import MainTemplate from '../../common/components/MainTemplate/MainTemplate';
import {
  setDisplayCountry,
  initialDisplayState,
} from '../../common/store/slices/display/displaySlice';

const NewsPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const countryParam = searchParams.get('country');
  const initialCountry = CountryNews.find(
    (country) => country.code === countryParam
  );

  if (initialCountry) {
    dispatch(setDisplayCountry(initialCountry));
  } else {
    searchParams.set('country', initialDisplayState.country.code);
    setSearchParams(searchParams);
  }
  return <MainTemplate></MainTemplate>;
};

export default NewsPage;
