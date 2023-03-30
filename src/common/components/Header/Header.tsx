import { Button, Modal, notification } from "antd";
import { Link } from "react-router-dom";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Image } from "antd";
import PolishLanguageImage from "../../assets/icons/pl.png";
import EnglishLanguageImage from "../../assets/icons/en.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HeaderWrapper,
  Logo,
  Buttons,
  ButtonImage,
  RightSideHeader,
  Languages,
  ModalBody,
} from "./Header.styles";
import { useDispatch, useSelector } from "react-redux";
import { DisplayLanguage, DisplayMethod } from "../../enums/DisplayMethod";
import { setDisplayMethod, setDisplayLanguage } from "../../store";
import { useTheme } from "styled-components";

type NotificationType = "success" | "info" | "warning" | "error";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const displayMethod: DisplayMethod = useSelector(
    (state: any) => state.display.method
  );
  const displayLanguage: DisplayLanguage = useSelector(
    (state: any) => state.display.language
  );

  const theme = useTheme();
  const tertiaryColor = theme.colors.tertiary;

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: t("changeDisplay"),
      duration: 2,
      style: {
        backgroundColor: tertiaryColor,
        color: "white",
      },
    });
  };

  const handleDisplayMethodChange = (displayMethod: DisplayMethod) => {
    dispatch(setDisplayMethod(displayMethod));
    openNotificationWithIcon("success");
  };

  const handleDisplayLanguageChange = (displayLanguage: DisplayLanguage) => {
    dispatch(setDisplayLanguage(displayLanguage));
    handleTrans(displayLanguage);
  };

  const handleTrans = (code: string) => {
    i18n.changeLanguage(code);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderWrapper>
      <Link to={`/news`}>
        <Logo>gnNews</Logo>
      </Link>
      <Buttons>
        <ButtonImage
          onClick={() => handleDisplayMethodChange(DisplayMethod.CARDS)}
        >
          <AppstoreOutlined data-testid="cards-button"
            style={
              displayMethod === DisplayMethod.CARDS
                ? { color: tertiaryColor }
                : {}
            }
          />
        </ButtonImage>
        <ButtonImage
          onClick={() => handleDisplayMethodChange(DisplayMethod.LIST)}
        >
          <UnorderedListOutlined data-testid="list-button"
            style={
              displayMethod === DisplayMethod.LIST
                ? { color: tertiaryColor }
                : {}
            }
          />
        </ButtonImage>
      </Buttons>
      <RightSideHeader>
        <Languages>
          <Image
            width={"50%"}
            height={"80%"}
            preview={false}
            src={PolishLanguageImage}
            alt={"polish-flag"}
            onClick={() => handleDisplayLanguageChange(DisplayLanguage.POLISH)}
            style={
              displayLanguage === DisplayLanguage.POLISH
                ? { border: `2px solid ${tertiaryColor}` }
                : {}
            }
          ></Image>
          <Image
            width={"50%"}
            height={"80%"}
            preview={false}
            src={EnglishLanguageImage}
            alt={"english-flag"}
            onClick={() => handleDisplayLanguageChange(DisplayLanguage.ENGLISH)}
            style={
              displayLanguage === DisplayLanguage.ENGLISH
                ? { border: `2px solid ${tertiaryColor}` }
                : {}
            }
          ></Image>
        </Languages>
        <Button type="default" onClick={showModal}>
          {t("popup")}
        </Button>
      </RightSideHeader>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ padding: "20px" }}
      >
        <ModalBody>Na wstępie chciałbym</ModalBody>
      </Modal>
      {contextHolder}
    </HeaderWrapper>
  );
};

export default Header;
