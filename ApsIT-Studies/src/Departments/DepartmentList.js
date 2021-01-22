import React from "react";
import ReactDom from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

import "./DepartmentList.css";
import { Icon, InlineIcon } from "@iconify/react";
import laptopCode from "@iconify-icons/fa-solid/laptop-code";
// npm install --save-dev @iconify/react @iconify-icons/emojione-monotone

import buildingConstruction from "@iconify-icons/emojione-monotone/building-construction";

import bxsCarMechanic from "@iconify-icons/bx/bxs-car-mechanic";

import computerF from "@iconify-icons/jam/computer-f";

import wifiIcon from "@iconify-icons/fa-solid/wifi";

import testTube from "@iconify-icons/mdi/test-tube";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function DepartmentList() {
  return (
    <div className="departmentList">
      <Carousel breakPoints={breakPoints}>
        <Item className="card1">
          <section>
            <Link to="/subjects/fe">
              <Icon className="card__logo" icon={testTube} />

              <h4 className="card__text">First Year &nbsp; Engineering</h4>
            </Link>
          </section>
        </Item>
        <Item className="card2" to="/subjects/it">
          <section>
            <Link to="/subjects/it">
              <Icon className="card__logo" icon={laptopCode} />

              <h4 className="card__text">Information Technology</h4>
            </Link>
          </section>
        </Item>

        <Item className="card3">
          <section>
            <Link to="/subjects/extc">
              <Icon className="card__logo" icon={wifiIcon} />

              <h4 className="card__text">
                Electronics &amp; Telecommunication
              </h4>
            </Link>
          </section>
        </Item>
        <Item className="card4">
          <section>
            <Link to="/subjects/comps">
              <Icon className="card__logo" icon={computerF} />
              <h4 className="card__text">Computer Science Engineering</h4>
            </Link>
          </section>
        </Item>
        <Item className="card5">
          <section>
            <Link to="/subjects/mech">
              <Icon className="card__logo" icon={bxsCarMechanic} />
              <h4 className="card__text">Mechanical Engineering</h4>
            </Link>
          </section>
        </Item>
        <Item className="card6">
          <section>
            <Link to="/subjects/civil">
              <Icon className="card__logo" icon={buildingConstruction} />
              <h4 className="card__text">Civil Engineering</h4>
            </Link>
          </section>
        </Item>
      </Carousel>
    </div>
  );
}

const rootElement = document.getElementById("root");

export default DepartmentList;
