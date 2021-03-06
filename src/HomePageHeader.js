import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./HomePageHeader.css";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import db from "./firebase";

function BootstrapNavbar() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const login = () => {
    if (user) {
      auth.signOut();
      history.push("/login");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Navbar
            fixed="top"
            className="HomePageHeader"
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
          >
            <Navbar.Brand className="HomePageHeader__logo" href="">
              <Link to="/">
                <img src="https://i.ibb.co/jWXbZWY/Aps-ITLogo-Resize.png" />{" "}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="">
                  <Link className="HomePageHeader__homeButton" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href="">
                  <Link className="HomePageHeader__homeButton" to="/notes">
                    {" "}
                    Notes{" "}
                  </Link>
                </Nav.Link>

                <Nav.Link href="">
                  <Link
                    className="HomePageHeader__homeButton"
                    to="/paperSolutions"
                  >
                    Paper Solutions
                  </Link>
                </Nav.Link>

                <NavDropdown
                  style={{ color: "#485b66" }}
                  className="HomePageHeader__homeButton"
                  title="Semester"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/semesters/sem1"
                    >
                      {" "}
                      Sem 1{" "}
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/semesters/sem2"
                    >
                      Sem 2
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/semesters/sem3"
                    >
                      Sem 3
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/semesters/sem4"
                    >
                      Sem 4
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/semesters/sem5"
                    >
                      Sem 5
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/semesters/sem6"
                    >
                      Sem 6
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/semesters/sem7"
                    >
                      Sem 7
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/semesters/sem8"
                    >
                      Sem 8
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  style={{ color: "#485b66" }}
                  className="HomePageHeader__homeButton"
                  title="Subjects"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      Engineering Mathematics-I
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      Basic Electrical Engineering
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      Engineering Mechanics
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      Engineering Chemistry-I
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      Engineering Physics-I
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      Engineering Mathematics-II
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      Engineering Graphics
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      C programming
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      Engineering Chemistry-II
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      Engineering Physics-II
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/fe"
                    >
                      {" "}
                      Professional Communication and Ethics- I
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/it"
                    >
                      {" "}
                      IT subjects
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/comps"
                    >
                      {" "}
                      COMPS Subjects
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/mech"
                    >
                      {" "}
                      MECH Subjects
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/civil"
                    >
                      {" "}
                      CIVIL Subjects
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    <Link
                      className="HomePageHeader__homeButton"
                      to="/subjects/extc"
                    >
                      {" "}
                      EXTC Subjects
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#easySolutions">
                  <Link
                    className="HomePageHeader__homeButton"
                    to="/easySolutions"
                  >
                    Easy Solutions
                  </Link>
                </Nav.Link>
                <Nav.Link href="#forum">
                  <Link className="HomePageHeader__homeButton" to="/forum">
                    forum
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <div className="header__optionMain">
                  <div onClick={login} className="header__option">
                    <span className="header__optionLineOne">
                      {user ? <span>Hello,</span> : ""}
                      {user?.email}
                    </span>
                    <span className="header__optionLineTwo">
                      <strong>
                        <Link to={!user && "/login"} className="header__link">
                          <Button variant="primary">
                            {user ? "Sign Out" : "Sign In"}
                          </Button>
                        </Link>
                      </strong>
                    </span>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default BootstrapNavbar;
