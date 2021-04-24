import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import web1 from "../../assets/img/projects/web1.JPG";
import webapp from "../../assets/img/projects/webapp.JPG";
import webapp2 from "../../assets/img/projects/webapp2.JPG";
import app1 from "../../assets/img/projects/app1.jpg";
import webapp3 from "../../assets/img/projects/webapp3.JPG";
import web2 from "../../assets/img/projects/web2.JPG";
import web3 from "../../assets/img/projects/web3.JPG";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_PYTHONFLASK from "../../assets/img/skills/flask.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Todo List With MUI */}
        <ImageEvent
            date="Jun 2020 - Oct 2020"
            className="text-center"
            text="Online Pizza Delivery Website"
            src={web1}
            alt="Online Pizza Delivery Website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Real-time Online Pizza Delivery Website where the user can order the pizzas. Where in server side the
Admin controls the delivery status of a order by using the admin panel
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Order Pizzas as much you can</li>
                          <li>User Friendly and Fully Respoisive</li>
                          <li>Admin Dashboard to Operate the Orders</li>
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              NodeJs
                            </span>
                          </li>
                       
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ExpressJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDb
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


{/* Project: MERN Tip Calculator */}
<ImageEvent
            date="Jan 2021"
            className="text-center"
            text="Easy Expense Tracker"
            src={webapp}
            alt="Easy Expense Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> it is a expense tracker web application where a user can
Calculate of their daily expenditure , income.
                        It uses MERN stack build to acomplish the same.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Calculate daily expenditure and income</li>
                          <li>Real-time API calls with Backend features</li>
                          <li>Styled with  Material-UI</li>
                          <li>See your income/expense details in PieChart </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://expense-budget-tracker.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Get GitHub Info */}
          <ImageEvent
            date="April 2020 – May 2020"
            className="text-center"
            text="Corona Virus Probability Tracker Using ML"
            src={webapp2}
            alt="Get GitHub Info"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>: you can get
the Probability Percentile of People's Positiveness of Corona Virus by the Custom Symptom inputs.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Fully Respoisive Design</li>
                          <li>Tested yourself as much you can</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHONFLASK}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python flask
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Smart Brain */}
          <ImageEvent
            date="Aug 2020 – Nov 2020"
            className="text-center"
            text="GIET University Off. Android Application"
            src={app1}
            alt="GIET University Off. Android Application"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> : Develop end to end
both user and admin Giet university mobile application
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>See Results, attendance</li>
                          <li>See Notice , Details Of GIET University</li>
                          <li>Dynamic App , Data comes from firebase</li>
                          <li>Admin app for sending the data to the UI app</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
                          You can <strong>register</strong> as new user or{" "}
                          <strong>log in</strong> using the demo account below.
                          <br />
                          <br />
                          <strong>Demo Account Details:</strong>
                          <br />
                          email: demo@demo.com
                          <br />
                          password: demo
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: RoboFriends */}

          <ImageEvent
            date="April 2021"
            className="text-center"
            text="EasyVideoChat"
            src={webapp3}
            alt="EasyVideoChat"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Real time video and chat functionalities
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Fully Respoisive WebApp working in all standard devices</li>
                          <li>Easy to navigate</li>
                          <li>This is also like a pwa </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ReactJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                        
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://videochatwithpranaya.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Product_Hunt_Clone */}

          <ImageEvent
            date="Dec 2020 - Feb 2021"
            className="text-center"
            text="EasyApply Website "
            src={web2}
            alt="EasyApply Website "
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> EasyApply Job Application Website using MERN stack
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          <li>Easy to apply for a job with min. no of steps</li>
                          <li>use of redux store</li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ReactJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              NodeJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ExpressJs
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://easyapply-jobs-internship.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portfolio using Django */}
          <ImageEvent
            date="July 2020"
            className="text-center"
            text="Sangharsh For Covid19"
            src={web3}
            alt="Sangharsh For Covid19"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Sangharsh for Covid19 is initiative for the People of India
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Take Self assessment tests</li>
                          <li>View the daily cases in india and world </li>
                          <li>lattest news about the pandemic</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap4
                            </span>
                          </li>
                          
                        </ul>
                        <hr />
                        {/* <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my
                          Portfolio website to recent one.
                          <br />
                          You can still see a video of my old portfolio by
                          clicking on the button below.
                          <br />
                          <br />
                        </em> */}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://sangharsh.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
