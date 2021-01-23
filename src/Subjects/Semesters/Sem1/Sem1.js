import React from "react";
import HomePageHeader from "../../../HomePageHeader";
import Semester from "../Semester";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Sem1.css";

import { Icon, InlineIcon } from "@iconify/react";
import downCircleFilled from "@iconify-icons/ant-design/down-circle-filled";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";

function Sem1() {
  const [{ user }, dispatch] = useStateValue();
  if (!user) return <Redirect to="/login" />;
  return (
    <div>
      <HomePageHeader />
      <Semester />
      <div className="semList">
        <div className="semList__text">
          <h2>Sem 1</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Engineering Mathematics-I <Icon icon={downCircleFilled} />
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
                  Basic Electrical Engineering <Icon icon={downCircleFilled} />
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
                  Engineering Mechanics <Icon icon={downCircleFilled} />
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
                  Engineering Chemistry-I <Icon icon={downCircleFilled} />
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
                  Engineering Physics-I <Icon icon={downCircleFilled} />
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
          <h2>BY SEMESTER</h2>
        </div>
        <div className="semList__accordion">
          <Accordion defaultActiveKey="">
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Sem 1 <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  First Year Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Information Technology
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Electronics &amp; Telecommunication
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Computer Science Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Mechanical Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="semList__subject">
                  Civil Engineering
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Sem 2 <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  First Year Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Information Technology
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Electronics &amp; Telecommunication
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Computer Science Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Mechanical Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="semList__subject">
                  Civil Engineering
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Sem3 <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  First Year Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Information Technology
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Electronics &amp; Telecommunication
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Computer Science Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Mechanical Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="semList__subject">
                  Civil Engineering
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="semList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Sem 4 <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  First Year Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Information Technology
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Electronics &amp; Telecommunication
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Computer Science Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Mechanical Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="semList__subject">
                  Civil Engineering
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="itList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Sem 5 <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">
                  First Year Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">
                  Information Technology
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">
                  Electronics &amp; Telecommunication
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">
                  Computer Science Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">
                  Mechanical Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="itList__subject">
                  Civil Engineering
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="itList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  Sem 6 <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="itList__subject">
                  First Year Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="itList__subject">
                  Information Technology
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="itList__subject">
                  Electronics &amp; Telecommunication
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="itList__subject">
                  Computer Science Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="itList__subject">
                  Mechanical Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="itList__subject">
                  Civil Engineering
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="itList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                  Sem 7 <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="itList__subject">
                  First Year Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="itList__subject">
                  Information Technology
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="itList__subject">
                  Electronics &amp; Telecommunication
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="itList__subject">
                  Computer Science Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="itList__subject">
                  Mechanical Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="itList__subject">
                  Civil Engineering
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="itList__card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="8">
                  Sem 8 <Icon icon={downCircleFilled} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="itList__subject">
                  First Year Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="itList__subject">
                  Information Technology
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="itList__subject">
                  Electronics &amp; Telecommunication
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="itList__subject">
                  Computer Science Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="itList__subject">
                  Mechanical Engineering
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="itList__subject">
                  Civil Engineering
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Sem1;
