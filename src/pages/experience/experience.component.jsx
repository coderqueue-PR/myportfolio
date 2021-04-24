import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";
import ahlogo from '../../assets/img/experience/ahlogo.jpg'
import twinreality from '../../assets/img/experience/twinreality.png';
import s2i from '../../assets/img/experience/s2i.JPG';
import binarycurve from '../../assets/img/experience/binarycurve.jpeg';
import gennext from '../../assets/img/experience/gennext.png';
import tcet from '../../assets/img/experience/tcet.jpg';
import jpmorgan from '../../assets/img/experience/jpmac.jpg';

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Industry Work Experience</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 1 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={twinreality} alt="Accenture logo" />
                </Card.Header>
                <hr></hr>
                  <Card.Title className="text-center">Twin Reality Technologies LLP</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web Developer Intern</strong>
                    <br />
                    <strong>Technology:</strong>ReactJs,  Html5 , Css3 , JavaScript & Bootstrap4
                    <br />
                    <strong>Duration:</strong> April 2021 - Present
                    <br/>
                    <strong> Description </strong>
                    {/* <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Developed</strong> automation system to create SQL bulk query scripts that 
                        increased efficiency by 80% and decreased working hours from 4 hours to 30 mins per task.
                      </li>

                    </ul>
                     */}
                    
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={s2i} alt="Accenture logo" />
                </Card.Header>
                <hr></hr>
                  <Card.Title className="text-center">Sciene-2-Innovation</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Frontend Developer Intern</strong>
                    <br />
                    <strong>Technology:</strong>ReactJs,  Html5 , Css3 , JavaScript & Bootstrap4
                    <br />
                    <strong>Duration:</strong> April 2021 - Present
                    <br/>
                    <strong> Description </strong>
                    {/* <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Developed</strong> automation system to create SQL bulk query scripts that 
                        increased efficiency by 80% and decreased working hours from 4 hours to 30 mins per task.
                      </li>

                    </ul> */}
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={tcet} alt="Accenture logo" />
                </Card.Header>
                <hr></hr>
                  <Card.Title className="text-center">TCET,Mumbai</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web Developer Intern</strong>
                    <br />
                    <strong>Technology:</strong>Html5 , Css3 , JavaScript & Bootstrap4
                    <br />
                    <strong>Duration:</strong> Feb 2021 - April 2021
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-center">
                      <strong>National InternShip Program &amp; Initiative By </strong> TCET,Mumbai. Make Realtime Websites
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={binarycurve} alt="Accenture logo" />
                </Card.Header>
                <hr></hr>
                  <Card.Title className="text-center">Binary Curve</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web Developer Intern</strong>
                    <br />
                    <strong>Technology:</strong>ReactJs, Material-UI , Advanced Css.
                    <br />
                    <strong>Duration:</strong> Mar 2021 - April 2021
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-center">
                    <strong>Working</strong> with the Main Website of Binary Curve(A EduTech. StartUp).
                    
                      <strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.
                      

                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={gennext} alt="Accenture logo" />
                </Card.Header>
                <hr></hr>
                  <Card.Title className="text-center">Gennext IT Management & Consulting Pvt Ltd</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web Developer Intern</strong>
                    <br />
                    <strong>Technology:</strong>ReactJs,  Material-UI , Figma , WireFrames
                    <br />
                    <strong>Duration:</strong> Dec 2020 - Feb 2021
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; Learnt</strong>  concept related to project initiation , estimation , software documentation and development and
make the whole UI and dashboard of Job Portal project using ReactJs and Material Ui.
</li>

                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={ahlogo} alt="Accenture logo" />
                </Card.Header>
                <hr></hr>
                  <Card.Title className="text-center">AH Web Solutions Pvt. Ltd.</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Frontend Developer Intern</strong>
                    <br />
                    <strong>Technology:</strong>Html5 , Css3 , JavaScript & Bootstrap4
                    <br />
                    <strong>Duration:</strong> May 2020 - July 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Learnt &amp; enhanced</strong>How to work in a team ,Working in Realtime Live Websites , Makes the Website Fully Responisve and add some more features</li>

                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={jpmorgan} alt="Accenture logo" />
                </Card.Header>
                <hr></hr>
                  <Card.Title className="text-center">JP Morgan Chase & Co.</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Software Engineering Virtual InternShip</strong>
                    <br />
                    <strong>Technology:</strong>Python , MS-Excel
                    <br />
                    <strong>Duration:</strong> May 2020 - May 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Developed</strong> automation system to create SQL bulk query scripts that 
                        increased efficiency by 80% and decreased working hours from 4 hours to 30 mins per task.
                      </li>

                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

    
    </div>
  );
};

export default Experience;
