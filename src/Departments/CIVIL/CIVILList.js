import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CIVILList.css";
import { Icon, InlineIcon } from "@iconify/react";
import downCircleFilled from "@iconify-icons/ant-design/down-circle-filled";
import { Link } from "react-router-dom";

function CIVILList() {
  return (
    <div>
      <div className="civilList">
        <div className="civilList__text">
          <h2>CIVIL Department</h2>
        </div>
        <div className="civilList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="civilList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Notes <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="civilList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="civilList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="civilList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="civilList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="civilList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="civilList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="civilList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Paper Solutions <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="civilList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="civilList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="civilList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="civilList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="civilList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="civilList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="civilList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Easy Solutions <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="civilList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="civilList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="civilList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="civilList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="civilList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="civilList__subject">Sem 8</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="civilList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  TechMax <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="civilList__subject">Sem 3</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="civilList__subject">Sem 4</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="civilList__subject">Sem 5</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="civilList__subject">sem 6</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="civilList__subject">Sem 7</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="civilList__subject">Sem 8</Card.Body>
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
          <h2>Sem 3 CIVIL</h2>
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
                  {" "}
                  <a
                    href="https://drive.google.com/file/d/1LX-T_ZYrNPwHJh7Bq79jDdK8OeCjjACB/view?usp=sharing"
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
                  Easy Solutions
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">TechMax</Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Mechanics of Solids <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Engineering Geology <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject"> Notes</Card.Body>
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
                    href="https://drive.google.com/file/d/1eE1Ii3cieU67wMI0Gs1oXno6XNlYj19l/view?usp=sharing"
                    target="_blank"
                    download="Engineering_Geology"
                  >
                    TechMax{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Architectural Planning &amp; Design of Buildings{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Fluid Mechanics- I <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1ZzBT-ypKFWzITs-c9wcR_IA5pBh3J14P/view?usp=sharing"
                    target="_blank"
                  >
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 4 CIVIL</h2>
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Fluid Mechanics-II <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1OM9u6PUPP473-Hhf8oKSMbcW5mUOqpfE/view?usp=sharing"
                    target="_blank"
                  >
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
                <Card.Body className="semList__subject">
                  {" "}
                  <a
                    href="https://drive.google.com/file/d/1_mvVWtAO7f53Vyg5fC9xb32UcWw1RcNr/view?usp=sharing"
                    target="_blank"
                  >
                    TechMax{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Structural Analysis <Icon icon={downCircleFilled} />
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
                    href="https://drive.google.com/file/d/1egVs9Uz-l6G3cAJRai-aC7X1f1ShS0Ix/view?usp=sharing"
                    target="_blank"
                  >
                    TechMax{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  {" "}
                  Surveying <Icon icon={downCircleFilled} />
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
                    href="https://drive.google.com/file/d/1GiOyxr1yQbwsv727CA7LT0xZmIE9NPEh/view?usp=sharing"
                    target="_blank"
                  >
                    TechMax{" "}
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Building Materials &amp; Concrete Technology{" "}
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
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1Ybear55vUx39PRYd-SP7t3As4bxQWXTs/view?usp=sharing"
                    target="_blank"
                  >
                    TechMax
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Building Design &amp; Drawing <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1cGEOpk1WK0ArW5Kv0sApMK-JLWmQIOlD/view?usp=sharing"
                    target="_blank"
                  >
                    Notes{" "}
                  </a>
                </Card.Body>
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
                <Card.Body className="semList__subject">
                  <a
                    href="https://drive.google.com/file/d/1Ybear55vUx39PRYd-SP7t3As4bxQWXTs/view?usp=sharing"
                    target="_blank"
                  >
                    TechMax
                  </a>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 5 CIVIL</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Structural Analysis-II <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Geotechnical Engineering – I <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Applied Hydraulics <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Environmental Engineering -I <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Transportation Engineering – I{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Department Level Optional Course -I{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 6 CIVIL</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Geotechnical Engineering-II <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Design and Drawing of Steel Structures{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Transportation Engineering- II{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Environmental Engineering-II <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Water Resource Engineering-I <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Department Level Optional Course-II{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 7 CIVIL</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Quantity Survey Estimation and Valuation{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Theory of Reinforced Concrete Structures{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Water Resource Engineering-II <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Department Level Optional Course-III{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 8 CIVIL</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Design and Drawing of Reinforced Concrete Structures{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Construction Management <Icon icon={downCircleFilled} />
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Department Level Optional Course-IV{" "}
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
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
                <Card.Body className="semList__subject">
                  {" "}
                  <Link to="/forum">Forum </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default CIVILList;
