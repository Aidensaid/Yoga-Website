import PageHeader from "../components/PageHeader";
import { Image, Container, Header, Divider } from "semantic-ui-react";
import StyledContainer from "../components/Container";

const About = () => {
  return (
    <>
      <PageHeader />
      <Container textAlign="center" style={{ marginBottom: "30px" }}>
        <Header>Iyengar Yoga</Header>
        Elizabeth Raikes is an Iyengar Yoga Practitioner. She has <br />
        has been practicing since 2010 and teaching since 2015.
      </Container>
      <Image centered size="medium" src="/portrait.jpg" />
      <Container style={{ marginTop: "30px" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          enim id quam aliquam accumsan. Nullam a justo risus. Nam sapien leo,
          scelerisque at lobortis ut, ornare et nisl. Morbi sagittis auctor
          neque, at elementum massa aliquam in. Etiam quis pharetra neque.
          Maecenas lectus purus, pretium in sodales sed, varius eget ante. Ut
          aliquet, tortr sit amet efficitur sagittis, elit risus posuere mi, sed
          placerat est libero in augue.
        </p>
        <Divider />
      </Container>
    </>
  );
};

export default About;
