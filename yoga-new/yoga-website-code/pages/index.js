import Head from "next/head";
import StyledContainer from "../components/Container";
import Divider from "../components/Divider";
import { Image, Container } from "semantic-ui-react";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#f6fff8" }}>
        <Head>
          <title>Liz Raikes Yoga</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* // /* What's the best way to style this? */}

        <PageHeader />
        <Image centered size="huge" src="/yoga.jpg" />
        <Container text style={{ margin: "5%" }}>
          <p style={{ fontStyle: "Georgia" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            enim id quam aliquam accumsan. Nullam a justo risus. Nam sapien leo,
            scelerisque at lobortis ut, ornare et nisl. Morbi sagittis auctor
            neque, at elementum massa aliquam in. Etiam quis pharetra neque.
            Maecenas lectus purus, pretium in sodales sed, varius eget ante. Ut
            aliquet, tortr sit amet efficitur sagittis, elit risus posuere mi,
            sed placerat est libero in augue.
          </p>
          <Divider />
        </Container>
      </div>
    </>
  );
}
