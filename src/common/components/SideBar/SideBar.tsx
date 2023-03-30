import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Country } from "../../models/Country";
import { setDisplayCountry } from "../../store";
import {
  ChangeCountryText,
  ChangeLanguageButton,
  ChangeLanguageMenu,
  CountryFlag,
  Navigation,
  NavigationArrow,
  NavigationItem,
  NavigationItemActive,
  SideBarWrapper,
} from "./SideBar.styles";
import MediaQuery from "react-responsive";
import { useTranslation } from "react-i18next";
import { CountryNews } from "../../constants/CountryNews";
import { DisplayLanguage } from "../../enums/DisplayMethod";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const displayCountry: Country = useSelector(
    (state: any) => state.display.country
  );

  const handleDisplayCountryChange = (country: Country) => {
    dispatch(setDisplayCountry(country));
    searchParams.set("country", country.code);
    setSearchParams(searchParams);
  };

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const NavigationFlag = (country: Country) => {
    return (
      <>
        {displayCountry.code === country.code ? (
          <NavigationItemActive>
            <ChangeCountryText>
              {i18n.language === DisplayLanguage.POLISH
                ? country.labelPL
                : country.labelEN}
            </ChangeCountryText>
            <CountryFlag>
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </CountryFlag>
          </NavigationItemActive>
        ) : (
          <NavigationItem onClick={() => handleDisplayCountryChange(country)}>
            <ChangeCountryText>
              {i18n.language === DisplayLanguage.POLISH
                ? country.labelPL
                : country.labelEN}
            </ChangeCountryText>
            <CountryFlag>
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </CountryFlag>
          </NavigationItem>
        )}
      </>
    );
  };

  return (
    <SideBarWrapper>
      <MediaQuery minWidth={768}>
        <Navigation className={isActive ? "navigation--active" : ""}>
          {CountryNews.map((country: Country) => {
            return NavigationFlag(country);
          })}
        </Navigation>
        <NavigationArrow className={isActive ? "navigation-arrow--active" : ""}>
          {isActive ? (
            <LeftOutlined onClick={handleClick} data-testid="arrow-left" />
          ) : (
            <RightOutlined onClick={handleClick} data-testid="arrow-right" />
          )}
        </NavigationArrow>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <ChangeLanguageButton type="primary" onClick={showDrawer} style={{}}>
          {t("changeLangaugeButton")}
        </ChangeLanguageButton>
        <ChangeLanguageMenu placement="left" onClose={onClose} open={open}>
          {CountryNews.map((country: Country) => {
            return NavigationFlag(country);
          })}
        </ChangeLanguageMenu>
      </MediaQuery>
    </SideBarWrapper>
  );
};

export default SideBar;
