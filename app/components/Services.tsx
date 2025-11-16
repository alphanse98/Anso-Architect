"use client";

import floor1 from "../assets/floor plan1.png";
import elevation2 from "../assets/GalleryImgs/elevation2.jpeg";
import interior1 from "../assets/interior1.jpeg";
import floorplan2 from "../assets/floorplan2.jpeg";
import elevation2b from "../assets/elevation2.jpeg";

function Services() {
  return (
    <div className="headerContainer">
      <section className="serviceSection">
        <h1 className="serviceHeading fontFamily" id="Services">
          Services
        </h1>

        <div className="serviceBoxs">
          <a className="serviceBox" href="#plan">
            <img src={floor1.src} className="serviceBoxIcon" alt="" />
            <p className="sevixeBoxP">2D Plan</p>
            <p className="priceBox">
              <s className="fontFamily priceBox">Rs.3000</s>
              <span className="fontFamily priceBox">Rs.999</span>
            </p>
          </a>

          <a className="serviceBox" href="#Elevation">
            <img src={elevation2.src} className="serviceBoxIcon" alt="" />
            <p className="sevixeBoxP">Elevation</p>
            <p className="priceBox">
              <s className="fontFamily priceBox">Rs.5000</s>
              <span className="fontFamily priceBox">Rs.1999</span>
            </p>
          </a>

          <a className="serviceBox" href="#Interior">
            <img src={interior1.src} className="serviceBoxIcon" alt="" />
            <p className="sevixeBoxP">Interior</p>
            <p className="priceBox">
              <s className="fontFamily priceBox">Rs.5000</s>
              <span className="fontFamily priceBox">Rs.1999</span>
            </p>
          </a>

          <a className="serviceBox" href="#3Dplan">
            <img src={floorplan2.src} className="serviceBoxIcon" alt="" />
            <p className="sevixeBoxP">3D Plan</p>
            <p className="priceBox">
              <s className="fontFamily priceBox">Rs.3000</s>
              <span className="fontFamily priceBox">Rs.1500</span>
            </p>
          </a>

          <a className="serviceBox" href="#WalkTrough">
            <img src={elevation2b.src} className="serviceBoxIcon" alt="" />
            <p className="sevixeBoxP">Walk Trough</p>
            <p className="priceBox">
              <s className="fontFamily priceBox">Rs.4000</s>
              <span className="fontFamily priceBox">Rs.1999</span>
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
