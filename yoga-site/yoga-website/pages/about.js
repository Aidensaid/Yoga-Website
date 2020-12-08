import PageHeader from "../components/PageHeader"
import { Image, Container, Header } from "semantic-ui-react"

const About = () => {
    return (
        <>
         <PageHeader />
         <Container style={{margin:"5%"}}textAlign="center">
          <Header style={{margin:"5%"}}>
            Iyengar Yoga
          </Header>
          Elizabeth Raikes is an Iyengar Yoga Practitioner. She has <br/>
          has been practicing since 2010 and teaching
          since 2015.
         </Container>
         <Image centered size="medium"src="/portrait.jpg" />
         <Container style={{margin:"5%"}}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas enim id quam aliquam accumsan. 
            Nullam a justo risus. Nam sapien leo, scelerisque at lobortis ut, ornare et nisl. Morbi sagittis auctor neque, at elementum massa aliquam in. 
            Etiam quis pharetra neque. Maecenas lectus purus, pretium in sodales sed, varius eget ante. 
            Ut aliquet, tortr sit amet efficitur sagittis, elit risus posuere mi, sed placerat est libero in augue.
         </Container>
        
        </>
    )
}

export default About