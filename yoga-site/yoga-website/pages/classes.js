import PageHeader from "../components/PageHeader"
import Container from "../components/Container"

const Classes = () => {
    return (
        <>
         <div style={{ backgroundColor: "#f6fff8", height: "100%"}}>
            <Container style={{padding: "5%"}}>
                 <PageHeader />
             </Container>
       <div>Corporate</div>
       <div>Private</div>
       <div>Schools</div>
       <div>Test</div>
         </div>
        </>
    )
}

export default Classes