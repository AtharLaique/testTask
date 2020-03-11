import React from "react";
import data from "../../assets/data";
import { Container, Row, Col ,Card } from "react-bootstrap";

const Content = props => {
  const index = props.location.state.id;
  console.log(data.images[index]);
  return (
    <div style={{ backgroundImage: `url(${data.images[index]})`, height: 400 }}>
      <Container>
        <h1>{data.title[index]}</h1>
        <h5>{data.subtitle[index]}</h5>
        <Row style={{ marginTop: "23%" }}>
          <Col lg="5">
            <Card className="text-white">
              <Card.Img   src={data.topLeft[index]} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>

          </Col>
          <Col lg="7" style={{marginTop:'17%'}}>
          <Card className="text-white">
              <Card.Img   src={data.topRight[index]} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};
export default Content;
