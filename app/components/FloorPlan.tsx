"use client";

import Image from "next/image";

import floorPLan1 from "../assets/floorplan1.jpeg";
import floorPLan2 from "../assets/floorplan2.jpeg";
import floorPLan3 from "../assets/floorplan3.jpeg";
import floorPLan4 from "../assets/floorplan4.jpeg";

export default function FloorPlan() {
  return (
    <div className="headerContainer">
      <section className="serviceFieldsFlex">
        {/* LEFT CONTENT */}
        <div className="serviceFields">
          <h1 className="serviceFieldsHeading fontFamily" id="3Dplan">
            3D Floor Plan
          </h1>

          <p className="serviceFieldsParagraph">
            Welcome to our exceptional 3D floor plan service! We take pride in
            offering expertly crafted floor plans that bring your vision to life
            with creativity and precision. Our team ensures accurate and
            detailed representations of your space, allowing you to visualize
            the design effectively. Prices start from ₹1999.
          </p>

          <button className="HeaderDownloadBtn btnCetnre">View More</button>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="serviceFieldsImgBOx">
          <div className="serviceFieldsImgFlexOne">
            <Image
              src={floorPLan1}
              alt="3D Floor Plan"
              className="serviceFieldsImgs"
              width={300}
              height={300}
            />
            <Image
              src={floorPLan2}
              alt="3D Floor Plan"
              className="serviceFieldsImgs"
              width={300}
              height={300}
            />
          </div>

          <div className="serviceFieldsImgFlexTwo">
            <Image
              src={floorPLan3}
              alt="3D Floor Plan"
              className="serviceFieldsImgs"
              width={300}
              height={300}
            />
            <Image
              src={floorPLan4}
              alt="3D Floor Plan"
              className="serviceFieldsImgs"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
