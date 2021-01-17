import PageHeader from "../components/PageHeader"
import Container from "../components/Container"
import Divider from "../components/Divider"
import {Image} from "semantic-ui-react"

const Classes = () => {
    return (
        <div style={{backgroundColor: "#f6fff8", height: "100%"}}>
        <Container style={{ padding: "5%", border: "1px solid black"}} >
        <PageHeader />
        {/* <Image centered size="huge"src="/yoga.jpg" /> */}
        <Container text style={{ margin: "5%" }}>
          <p style={{fontStyle:"Georgia"}}>
          I am passionate about teaching yoga, I enjoy watching my students progress, and feeling the benefits it brings to all aspects of their lives.
           Iyengar yoga is accessible for all age groups and levels.
           Poses can be approached in many different ways, props are often used to create effective asanas.
          </p>
          <Divider />
        </Container>
        <Container style={{border: "1px solid red", height: "100%"}}></Container>
      </Container>
      </div>
    //      {/* <div style={{ backgroundColor: "#f6fff8"}}>
    //         <Container style={{padding: "5%"}}>
    //              <PageHeader />
    //          </Container>
    //    <div>Corporate</div>
    //    <div>Private</div>
    //    <div>Schools</div>
    //    <div>Test</div>
    //      </div> */}
    )
}

export default Classes