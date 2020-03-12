import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import {FacebookFilled ,
        TwitterSquareFilled , 
        LinkedinFilled ,
        YoutubeFilled ,
        InstagramFilled} from '@ant-design/icons';

import data from '../../assets/data';

const Footer = (props) => {
    console.log(data.footer[props.id].image[0])
  return <div> 
      <div style={{backgroundColor:'#f2f2f2',padding:'3%'}}> 
      <Container >
      <h3 className="mt-3">Sponsored articles</h3>
      <Row>
          <Col lg="4">
              <img src={data.footer[props.id].image[0]}/>
                <text>{data.footer[props.id].title[0]}</text>
          </Col>
          <Col lg="4">
          <img src={data.footer[props.id].image[1]}/>
                <text> {data.footer[props.id].title[1]}</text>
          </Col>
          <Col lg="4">
          <img src={data.footer[props.id].image[2]}/>
                <text> {data.footer[props.id].title[2]}</text>
          </Col>
      </Row>
      </Container>
      </div> 
      <div style={{backgroundColor:'#752482',padding:'5%'}}>
      <Row>
          <Col lg="5">
          <Button variant="outline-secondary">Coontact Us</Button>
          &nbsp;
          &nbsp;
          <Button variant="outline-secondary">Give Feedback</Button>
          <br/>
          <FacebookFilled className='m-3' />
          <TwitterSquareFilled  className='m-3' />
          <LinkedinFilled  className='m-3' />
          <YoutubeFilled  className='m-3' />
          <InstagramFilled   className='m-3'/>
          </Col>
          <Col lg="2">
              <ul style={{listStyle:"none"}}>
                  <li>
                        Advisers
                  </li>
                  <li>Providers</li>
                  <li> Data</li>
              </ul>
          </Col>
          <Col lg="2">
          <ul style={{listStyle:"none"}}>
                  <li>
                  About us</li>
                  <li>Join our team</li>
                  <li>Accessibility</li>
                  <li>Ad opportunities
                  </li>
                  
              </ul>
          </Col>
          <Col lg="3">
          <ul style={{listStyle:"none"}}>
                  <li>   Glossary</li>
                  <li>Terms and conditions</li>
                  <li>Privacy and cookies</li>
                  <li>Modern slavery statement</li>
                  
                  </ul>
          </Col>
      </Row>
      </div>
      </div>
};
export default Footer;