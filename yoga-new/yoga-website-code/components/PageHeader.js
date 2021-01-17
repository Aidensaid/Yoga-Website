import NavBar from "../components/NavBar";
import Header from "../components/Header";
import StyledContainer from "../components/Container";
import Divider from "../components/Divider";

const PageHeader = () => {
  return (
    <>
      <StyledContainer>
        <Header size="huge">Liz Raikes Yoga</Header>
        <NavBar size="huge"></NavBar>
        <Divider />
      </StyledContainer>
    </>
  );
};

export default PageHeader;
