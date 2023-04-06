import { Button, Modal, notification } from 'antd';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import PolishLanguageImage from '../../assets/icons/pl.png';
import EnglishLanguageImage from '../../assets/icons/en.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  HeaderWrapper,
  Logo,
  Buttons,
  ButtonImage,
  RightSideHeader,
  Languages,
  ModalBody,
} from './Header.styles';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayLanguage, DisplayMethod } from '../../enums/DisplayMethod';
import { useTheme } from 'styled-components';
import {
  setDisplayMethod,
  setDisplayLanguage,
} from '../../store/slices/display/displaySlice';
import { RootState } from '../../store/store';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const displayMethod: DisplayMethod = useSelector(
    (state: RootState) => state.display.method
  );
  const displayLanguage: DisplayLanguage = useSelector(
    (state: RootState) => state.display.language
  );

  const theme = useTheme();
  const tertiaryColor = theme.colors.tertiary;

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: t('changeDisplay'),
      duration: 2,
      style: {
        backgroundColor: tertiaryColor,
        color: 'white',
      },
    });
  };
  const handleTrans = (code: string) => {
    i18n.changeLanguage(code);
  };

  const handleDisplayMethodChange = (displayMethodHandle: DisplayMethod) => {
    dispatch(setDisplayMethod(displayMethodHandle));
    openNotificationWithIcon('success');
  };

  const handleDisplayLanguageChange = (
    displayLanguageHangle: DisplayLanguage
  ) => {
    dispatch(setDisplayLanguage(displayLanguageHangle));
    handleTrans(displayLanguageHangle);
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
    <>
      <HeaderWrapper>
        <Link to={`/news`}>
          <Logo>gnNews</Logo>
        </Link>
        <Buttons>
          <ButtonImage
            onClick={() => handleDisplayMethodChange(DisplayMethod.CARDS)}
          >
            <AppstoreOutlined
              data-testid="cards-button"
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
            <UnorderedListOutlined
              data-testid="list-button"
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
              width={'50%'}
              height={'80%'}
              preview={false}
              src={PolishLanguageImage}
              alt={'polish-flag'}
              onClick={() =>
                handleDisplayLanguageChange(DisplayLanguage.POLISH)
              }
              style={
                displayLanguage === DisplayLanguage.POLISH
                  ? { border: `2px solid ${tertiaryColor}` }
                  : {}
              }
            ></Image>
            <Image
              width={'50%'}
              height={'80%'}
              preview={false}
              src={EnglishLanguageImage}
              alt={'english-flag'}
              onClick={() =>
                handleDisplayLanguageChange(DisplayLanguage.ENGLISH)
              }
              style={
                displayLanguage === DisplayLanguage.ENGLISH
                  ? { border: `2px solid ${tertiaryColor}` }
                  : {}
              }
            ></Image>
          </Languages>
          <Button
            type="default"
            onClick={showModal}
            style={{ width: '100%', padding: 0 }}
          >
            {t('popup')}
          </Button>
        </RightSideHeader>
      </HeaderWrapper>
      <Modal
        title="Coś się kończy, coś się zaczyna..."
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{ padding: '20px' }}
      >
        <ModalBody>
          Tworzenie przeze mnie projektu rekrutacyjnego dobiegło końca, czego
          wynikiem jest ta oto aplikacja 😊, Jednocześnie największą frajdę oraz
          największą trudność przysporzyły mi autorskie style CSS.W dużej mierze
          postanowiłem stworzyć swój własny Layout. Oczywiście w pełni
          wykorzystanie biblioteki UI pozwoliłoby może na lepszy efekt wizualny,
          ale postanowiłem tutaj potrenować bardziej zaawansowany CSS, który
          dość często jest pomijany na rzecz zagłębiania się w typescript (a tak
          jest przynajmniej w moim przypadku). Wykorzystane zostały zatem takie
          rzeczy jak Transform, Transition, grid, a także typowe jak flex czy
          @media.
        </ModalBody>
      </Modal>
      {contextHolder}
    </>
  );
};

export default Header;
