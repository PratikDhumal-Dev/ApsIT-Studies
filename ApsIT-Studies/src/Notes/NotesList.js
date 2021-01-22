import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./NotesList.css";
import { Icon, InlineIcon } from "@iconify/react";
import downCircleFilled from "@iconify-icons/ant-design/down-circle-filled";

function NotesList() {
  return (
    <div className="notesList">
      <div className="notesList__text">
        <h2>Notes by Department</h2>
      </div>
      <div className="notesList__accordion">
        <Accordion defaultActiveKey="">
          <Card className="notesList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                First Year Engineering <Icon icon={downCircleFilled} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="notesList__subject">Sem 1</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="notesList__subject">sem 2</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="notesList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Information Technology <Icon icon={downCircleFilled} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="notesList__subject">Sem 3</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="notesList__subject">Sem 4</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="notesList__subject">Sem 5</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="notesList__subject">sem 6</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="notesList__subject">Sem 7</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="notesList__subject">Sem 8</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="notesList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Electronics &amp; Telecommunication{" "}
                <Icon icon={downCircleFilled} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="notesList__subject">Sem 3</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="notesList__subject">Sem 4</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="booksList__subject">Sem 5</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="notesList__subject">sem 6</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="notesList__subject">Sem 7</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="notesList__subject">Sem 8</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="notesList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Mechanical Engineering <Icon icon={downCircleFilled} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="notesList__subject">Sem 3</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="notesList__subject">Sem 4</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="notesList__subject">Sem 5</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="notesList__subject">sem 6</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="notesList__subject">Sem 7</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="notesList__subject">Sem 8</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="notesList__card">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Civil Engineering <Icon icon={downCircleFilled} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="notesList__subject">Sem 3</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="notesList__subject">Sem 4</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="notesList__subject">Sem 5</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="notesList__subject">sem 6</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="notesList__subject">Sem 7</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="notesList__subject">Sem 8</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default NotesList;
