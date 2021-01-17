import NavBar from "../components/NavBar";
import StyledHeader from "../components/Header";
import StyledContainer from "../components/Container";
import Divider from "../components/Divider";

const PageHeader = () => {
  return (
    <>
      <StyledContainer>
        <StyledHeader size="huge">Liz Raikes Iyengar Yoga</StyledHeader>
        <NavBar size="huge"></NavBar>
        <Divider />
      </StyledContainer>
    </>
  );
};

export default PageHeader;
