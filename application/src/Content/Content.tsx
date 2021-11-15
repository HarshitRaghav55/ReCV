import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from './assets/images/1.jpg';
import image2 from './assets/images/2.jpg';
import image3 from './assets/images/3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
const Content = () => {
    return (
        <React.Fragment>
            <div className='slideShow' style={{margin:"1%"}}>
                <Carousel fade pause='hover'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                            width="800px"
                            height="400px"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                            width="800px"
                            height="400px"

                        />

                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                            width="800px"
                            height="400px"
                        />

                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
        </React.Fragment>
    );
}


export default Content;