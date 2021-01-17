import PageHeader from "../components/PageHeader"
import { Image, Container, Header, Divider } from "semantic-ui-react"

const About = () => {
    return (
    <>
        <div style={{ backgroundColor: "#f6fff8"}}>
        <Container style={{padding:"5%"}}>
         <PageHeader />
         <Container text style={{margin:"5%"}}textAlign="center">
          <Header style={{margin:"5%"}}>
            Iyengar Yoga
          </Header>
          I've  been a regular practitioner of Iyengar Yofa for 18 years. I've trained at the BKS Iyengar Yoga Institute in Delhi.
         </Container>
         <Image centered size="medium"src="/portrait.jpg" />
         <Container text style={{margin:"5%"}}>
             <p>
           I am passionate about teaching yoga, I enjoy watching my students progress, and feeling the benefits it brings to all aspects of their lives
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

export default About