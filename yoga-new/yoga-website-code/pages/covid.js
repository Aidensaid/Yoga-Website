import PageHeader from "../components/PageHeader";
import { Container, Header } from "semantic-ui-react";

const Covid = () => {
  return (
    <>
      <PageHeader />
      <Container style={{ padding: "25px" }}>
        <Header>Class Sizes</Header>
        <p>
          All of my classes follow COVID 19 safety measures, including social
          distancing. Class sizes are limited to 10 people.
        </p>
        <Header>Equipment</Header>
        <p>Equipment details...</p>
      </Container>
    </>
  );
};

export default Covid;
