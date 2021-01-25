import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./COMPSList.css";

import { Icon, InlineIcon } from "@iconify/react";
import downCircleFilled from "@iconify-icons/ant-design/down-circle-filled";

function COMPSList() {
  return (
    <div>
      <div className="compsList">
        <div className="compsList__text">
          <h2>COMPS Department</h2>
        </div>
        <div className="compsList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="compsList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Notes <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="compsList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="compsList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="compsList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="compsList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="compsList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="compsList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="compsList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Paper Solutions <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="compsList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="compsList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="compsList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="compsList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="compsList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="compsList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="compsList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Easy Solutions <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="compsList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="compsList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="compsList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="compsList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="compsList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="compsList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="compsList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  TechMax <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="compsList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="compsList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="compsList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="compsList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="compsList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="compsList__subject">Sem 8</Card.Body>
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
          <h2>Sem 3 COMPS</h2>
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
                  Discrete Structures and Graph Theory{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject"> Notes </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Paper Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1IbvU0YOxmTGhErMZcA1dkk__ztCoRXf_/view?usp=sharing"
                    target="_blank"
                  >
                    Easy Solutions
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
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Data Structure <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1INhSUTYfhsjRTrf_rMnBLt5A4M-dJvRw/view?usp=sharing"
                    target="_blank"
                  >
                    Notes
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
                  Digital Logic &amp; Computer Architecture{" "}
                  <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/14-2Isv39D6krbdfosNYAjLhGYgcsB7Wa/view?usp=sharing"
                    target="_blank"
                  >
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
                  Computer Graphics <Icon icon={downCircleFilled} />
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
                    href="https://drive.google.com/file/d/1cPnNrKnCjauHH8G9Qi1ff1Y4GTvCSznG/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Easy Solutions{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1ek1Qa19N4NUEM3FDG1yKhGPMH-65zcWV/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    TechMax{" "}
                  </a>
                </Card.Body>
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
          <h2>Sem 4 COMPS</h2>
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
                  {" "}
                  <a
                    href="https://drive.google.com/file/d/18NQLNAOHo5BFvjF2izoEngucOEqalXHR/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
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
                  Analysis of Algorithm <Icon icon={downCircleFilled} />
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
                    href="https://drive.google.com/file/d/1o0FZAjrlo-27JHIuk5ei98RVEYfzltd8/view?usp=sharing"
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
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Database Management System <Icon icon={downCircleFilled} />
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
                  Operating System <Icon icon={downCircleFilled} />
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
                    href="https://drive.google.com/file/d/1Avl92yv3jOUDHi7z4pQlAAwJiOC9irch/view?usp=sharing"
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
                  Microprocessor <Icon icon={downCircleFilled} />
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
          <h2>Sem 5 COMPS</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Microprocessor <Icon icon={downCircleFilled} />
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
                  <a
                    href="https://drive.google.com/file/d/1f9wIMf9SWPUFPuLRPIob358CvvQIIVR_/view?usp=sharing"
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
                  Database Management System <Icon icon={downCircleFilled} />
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
                    href="https://drive.google.com/file/d/1zW82bfoWlc0KhypmlkkMCo13_M_8iMCR/view?usp=sharing"
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
                  Computer Network <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1Agg0_7jcdKQLoPMRtq3Tt5P0sipMSbBg/view?usp=sharing"
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
                  Theory of Computer Science <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1f9wIMf9SWPUFPuLRPIob358CvvQIIVR_/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    TechMax{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">Forum</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Department Level Optional Course -I{" "}
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
          <h2>Sem 6 COMPS</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Software Engineering <Icon icon={downCircleFilled} />
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
                  System Programming &amp; Complier Construction{" "}
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
                  Data Warehousing &amp; Mining <Icon icon={downCircleFilled} />
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
                  Cryptography &amp; System Security{" "}
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
                  Department Level Optional Course -II{" "}
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
          <h2>Sem 7 COMPS</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Digital Signal &amp; Image Processing{" "}
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
                  Mobile Communication &amp; Computing{" "}
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
                  Artificial Intelligence &mp; Soft Computing{" "}
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
          <h2>Sem 8 COMPS</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Human Machine Interaction <Icon icon={downCircleFilled} />
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
                  Distributed Computing <Icon icon={downCircleFilled} />
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
                  Department Level Optional Course -IV{" "}
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
                  Institute Level Optional Course-II
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
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default COMPSList;
