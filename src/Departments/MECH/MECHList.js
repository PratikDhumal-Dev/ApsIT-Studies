import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./MECHList.css";
import { Icon, InlineIcon } from "@iconify/react";
import downCircleFilled from "@iconify-icons/ant-design/down-circle-filled";

function MECHList() {
  return (
    <div className="mechList">
      <div className="mechList__text">
        <h2>MECH Department</h2>
      </div>
      <div className="mechList__accordion">
        <Accordion defaultActiveKey="">
          <Card className="mechList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Notes
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="mechList__subject">Sem 3</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="mechList__subject">Sem 4</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="mechList__subject">Sem 5</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="mechList__subject">sem 6</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="mechList__subject">Sem 7</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="mechList__subject">Sem 8</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="mechList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Paper Solutions
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="mechList__subject">Sem 3</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="mechList__subject">Sem 4</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="mechList__subject">Sem 5</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="mechList__subject">sem 6</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="mechList__subject">Sem 7</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="mechList__subject">Sem 8</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="mechList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Easy Solutions
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="mechList__subject">Sem 3</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="mechList__subject">Sem 4</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="mechList__subject">Sem 5</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="mechList__subject">sem 6</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="mechList__subject">Sem 7</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="mechList__subject">Sem 8</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="mechList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                TechMax
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="mechList__subject">Sem 3</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="mechList__subject">Sem 4</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="mechList__subject">Sem 5</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="mechList__subject">sem 6</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="mechList__subject">Sem 7</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="mechList__subject">Sem 8</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="itList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                Forum
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
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 3 MECH</h2>
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
                  Strength of Materials <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1QE9Px9X74PNKXkCuMVXpcdRi6msMm5dY/view?usp=sharing"
                    target="_blank "
                  >
                    {" "}
                    Notes{" "}
                  </a>
                </Card.Body>
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
                  Production Processes <Icon icon={downCircleFilled} />
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
                    href="https://drive.google.com/file/d/14_3esZXw-UtEFW_xuFjX9CLg_klRlhG_/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1FM2VpZgc_sYCfJ2jFAiPH9T1J0V3HPji/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    TechMax{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Materials and Metallurgy <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1BsFAtW6lXf4XYac3HlFlfHo5xELl_XOz/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Notes{" "}
                  </a>
                </Card.Body>
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
                  Thermodynamics <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1W60h76x_YJSjN5cFXpOt9LXUUmLFQxoT/view?usp=sharing"
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
          <h2>Sem 4 MECH</h2>
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
                  Fluid Mechanics <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1nnhoodBll8rYjDHpVUX-D_6O938SedaN/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Notes{" "}
                  </a>
                </Card.Body>
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
                  Kinematics of Machinery <Icon icon={downCircleFilled} />
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
                  CAD/CAM
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
                  Industrial Electronics <Icon icon={downCircleFilled} />
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
                    href="https://drive.google.com/file/d/12KRbOxp5Hy_3Ire6YCRb79rmXJE4RMNQ/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions
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
          <h2>Sem 5 MECH</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Internal Combustion Engines <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <a
                    href="https://drive.google.com/file/d/1q8CPQamqn4FlCnCMbAgZUlZqIG7_3Tl2/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    TechMax{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Mechanical Measurements and Control{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  <a href="https://drive.google.com/file/d/1_tA8AkEXa7c-4gpIXNl6Ce6FzcGui-eK/view?usp=sharing">
                    {" "}
                    Notes{" "}
                  </a>
                </Card.Body>
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
                  Heat Transfer <Icon icon={downCircleFilled} />
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
                    href="https://drive.google.com/file/d/1ArS2O5w_qQkOLlTu4AxN3-9c_128iLN2/view?usp=sharing"
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
                  Dynamics of Machinery <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1Kk537HztT0Hjj0LBCJuxqt2gwQ13f6yR/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Notes
                  </a>
                </Card.Body>
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
                  Department Level Optional Course I{" "}
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
          <h2>Sem 6 MECH</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Metrology and Quality engineering{" "}
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
                  Machine Design I <Icon icon={downCircleFilled} />
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
                  Finite Element Analysis <Icon icon={downCircleFilled} />
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
                  Refrigeration and Air Conditioning{" "}
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
          <h2>Sem 7 MECH</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Machine Design II <Icon icon={downCircleFilled} />
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
                  CAD/CAM/CAE <Icon icon={downCircleFilled} />
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
                  Production Planning and Control{" "}
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
                  Department Level Optional Course -III{" "}
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
                  Institute Level Optional Course-I{" "}
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
          <h2>Sem 8 MECH</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Design of Mechanical Systems <Icon icon={downCircleFilled} />
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
                  Industrial Engineering and Management{" "}
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
                  Power Engineering <Icon icon={downCircleFilled} />
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
                  Department Level Optional Course IV
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

export default MECHList;
