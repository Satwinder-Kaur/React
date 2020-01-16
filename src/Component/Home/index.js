import React from 'react';
import Logo from "../../../src/login.png"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './home.css';
import { Div, Cont, First, Second, P, Form1, InputGroup1, Button1, Label1, InputGroupText1, Input1, Division } from "../../../src/style";
import { Row, Col, ButtonGroup, FormGroup, InputGroupAddon } from 'reactstrap';
import { MdMailOutline } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

function Home() {

  let hello = (e) => {
    e.preventDefault()
  }
  return (
    <Div className="App">
      <Cont>
        <Row>
          <Col md="6" className="demo">
            <First>
              <img src={Logo} alt="" height="150" />
              <P>Datalyze provides a secure end-to-end platform that enables easy intergration
                  of Machine Learning into business processes; from data management, to training and Deployment of models in production</P>
            </First>
          </Col>
          <Col md="6" className="demo">
            <Second>
              <Form1>
                <FormGroup>
                  <Label1>Login here and Start Datalyze</Label1>
                </FormGroup>
                <Division>
                  <MdMailOutline />
                  <Input1 placeholder="Email" type="text" />
                </Division>
                <br></br>
                <Division>
                  <FaUnlockAlt />
                  <Input1 type="Password" placeholder="Password" />
                </Division>
                <br></br>
                <ButtonGroup>
                  <Button1>LOG IN <IoIosArrowRoundForward /></Button1>
                </ButtonGroup>
              </Form1>
            </Second>
          </Col>
        </Row>
      </Cont>
    </Div>
  );
}

export default Home;
