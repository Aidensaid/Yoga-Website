import PageHeader from "../components/PageHeader";
import { Container, Header } from "semantic-ui-react";

const Classes = () => {
  return (
    <>
      <PageHeader />
      <Container style={{ padding: "25px" }}>
        <Header>Individuals</Header>
        <p>
          I currently teach a class on Sundays at 9:30am, at the &#8239;
          <a
            href="https://www.google.com/maps/dir//Rozelle+School+Of+Visual+Arts,+57+Nelson+St,+Rozelle+NSW+2039/@-33.8696466,151.1274955,13z/data=!4m12!1m2!2m1!1srozelle+school+of+arts!4m8!1m0!1m5!1m1!1s0x6b12afc70191bd69:0x4be7fa9f5eaa3745!2m2!1d151.1720078!2d-33.8618181!3e3"
            target="blank"
          >
            Rozelle School of Arts.
          </a>
        </p>
        <p>Parking information...</p>
        <Header>Corporate</Header>
        <p>For enquiries...</p>
        <Header>Schools</Header>
        <p>For enquiries...</p>
      </Container>
    </>
  );
};

export default Classes;
