import Head from 'next/head'
import Container from "../components/Container"
import Divider from "../components/Divider"
import { Image, TableBody } from "semantic-ui-react"
import PageHeader from "../components/PageHeader"


export default function Home() {
  return (
    <>
    <div style={{ backgroundColor: "#f6fff8"}}>
      <Head>
        <title>Liz Raikes Yoga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* // /* What's the best way to style this? */}
      <style jsx global>{`
      p {
        font-size: 20px;
      }
    `}</style>
      <Container style={{ padding: "5%" }} >
        <PageHeader />
        <Image centered size="huge"src="/yoga.jpg" />
        <Container text style={{ margin: "5%" }}>
          <p style={{fontStyle:"Georgia"}}>
          I am passionate about teaching yoga, I enjoy watching my students progress, and feeling the benefits it brings to all aspects of their lives.
           Iyengar yoga is accessible for all age groups and levels.
           Poses can be approached in many different ways, props are often used to create effective asanas.
          </p>
          <Divider />
        </Container>
      </Container>
      </div>
    </>
  )
}
