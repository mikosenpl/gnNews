import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewsList from "../NewsList/NewsList";
import SideBar from "../SideBar/SideBar";
import { MainTemplateWrapper } from "./MainTemplate.styles";

const MainTemplate = () => {
  return (
    <MainTemplateWrapper>
      <Header />
      <SideBar />
      <NewsList />
      <Footer />
    </MainTemplateWrapper>
  );
};

export default MainTemplate;
