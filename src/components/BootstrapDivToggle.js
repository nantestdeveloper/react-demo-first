import React from 'react'
import { Accordion,Card } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

class BootstrapDivToggle extends React.Component{

    render(){
        return(
          <div>
          <div className="container">
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Click here to expand 1
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        Hello! Welcome to Nicesnippets Toggle Click Here 1
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click here to expand 2
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! Welcome to Nicesnippets Toggle Click Here 2</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
            <br></br>
            <div className="carousel-align">
              <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.nicesnippets.com/upload/thumbnail/year.png"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.nicesnippets.com/upload/thumbnail/footer-social-icon-design-example-using-bootstrap-4.png"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
            </div>
            </div>
        )
    }
    
}

export default BootstrapDivToggle;