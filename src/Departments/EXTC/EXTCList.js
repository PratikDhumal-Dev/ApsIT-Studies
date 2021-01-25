import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./EXTCList.css";

import { Icon, InlineIcon } from "@iconify/react";
import downCircleFilled from "@iconify-icons/ant-design/down-circle-filled";

function EXTCList() {
  return (
    <div>
      <div className="extcList">
        <div className="extcList__text">
          <h2>EXTC Department</h2>
        </div>
        <div className="extcList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="extcList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Notes <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="extcList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="extcList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="extcList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="extcList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="extcList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="extcList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="extcList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Paper Solutions <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="extcList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="extcList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="extcList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="extcList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="extcList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="extcList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="extcList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Easy Solutions <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="extcList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="extcList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="extcList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="extcList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="extcList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="extcList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="extcList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  TechMax <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="extcList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="extcList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="extcList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="extcList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="extcList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="extcList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="itList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Forum <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 3 EXTC</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Engineering Mathematics-III <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1LX-T_ZYrNPwHJh7Bq79jDdK8OeCjjACB/view?usp=sharing"
                    target="_blank"
                  >
                    Notes
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Electronic Devices &amp; Circuits{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1nugXOZvoOntz4g6pr_UOEgF0jp-rshjf/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    TechMax{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Digital System Design <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/16A_ZOKS40PtHQ5zgWbrNKezHESDIy0oA/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Notes{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Network Theory <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Electronic Instrumentation &amp; Control Systems{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1w4wjOOeLRPIIRz1bcq1mtTwENv_WHIJ-/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Notes{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 4 EXTC</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Engineering Mathematics-IV <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/18NQLNAOHo5BFvjF2izoEngucOEqalXHR/view?usp=sharing"
                    target="_blank"
                  >
                    Notes{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1684oKQ04VTeacbkdzIwt55yBxhyBrhnJ/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Microcontrollers <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Linear Integrated Circuits <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1IWp2ylspBlLO6Z3MKPA2CH8xcdINDpYI/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Signals &amp; Systems <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/115u-dETRue_3CHNFc5jDdBTpxQai_pWJ/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Principles of Communication Engineering{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1df9FgNQuoaK5ThzmiJ2OY5kFyXW89oQZ/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 5 EXTC</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Microprocessor &amp; Peripherals Interfacing{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1dqHryFYDunSHs_5MRVNix8i38Qhfg9P5/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Digital Communication <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1q_fjy0A5Bs7ZaC0SOigAj_Wj5sUx_-fq/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Electromagnetic Engineering <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1vQftAALaEhKs7HeT8pmv--2RcV7F4Ep0/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Discrete Time Signal Processing{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1Ntwn3GYaL8GKy-TEj4aupfOBUJBpED68/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Department Level Optional Course I{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 6 EXTC</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Microcontroller &amp; Applications{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Computer Communication Network{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Antenna &amp; Radio Wave Propagation{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Image Processing and Machine Vision Lab{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Department Level Optional Course II{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 7 EXTC</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Microwave Engineering <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Mobile Communication System <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Optical Communication <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Department Level Optional Course III{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Institute Level Optional Course I{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 8 EXTC</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  RF Design <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Wireless Networks <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Department Level Optional Course IV{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Institute Level Optional Course II
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Notes</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default EXTCList;
