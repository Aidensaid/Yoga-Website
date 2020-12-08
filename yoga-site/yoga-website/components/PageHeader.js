import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Container from "../components/Container"
import Divider from "../components/Divider"

const PageHeader = () => {
 return (
 <Container style={{margin: "5%"}}>
    <Header size="huge">Liz Raikes Yoga</Header>
    <NavBar size="huge"></NavBar>
    <Divider />
 </Container>
 )
}

export default PageHeader
