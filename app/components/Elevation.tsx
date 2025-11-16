import Image from "next/image";

import elevation1 from "../assets/elevation1.jpeg";
import elevation2 from "../assets/elevation2.jpeg";
import elevation3 from "../assets/elevation3.jpeg";
import elevation4 from "../assets/elevation4.jpeg";

function Elevation() {
  return (
    <div className="headerContainer">
      <section className="serviceFieldsFlex serviceFieldsOdd">
        <div className="serviceFields">
          <h1 className="serviceFieldsHeading fontFamily" id="Elevation">
            Elevation
          </h1>

          <p className="serviceFieldsParagraph oddParagraph">
            Welcome to our house elevation service! We specialize in creating
            captivating and functional exterior designs that reflect your
            preferred style while harmonizing with the surroundings. Our expert
            team ensures personalized solutions, compliance with regulations,
            and meticulous planning for a seamless construction process. Elevate
            the value and appeal of your property with our thoughtful and
            aesthetically pleasing elevation designs. Prices start from 1999.
          </p>

          <button className="HeaderDownloadBtn btnCetnre">View More</button>
        </div>

        <div className="serviceFieldsImgBOx">
          <div className="serviceFieldsImgFlexOne">
            <Image
              src={elevation1}
              alt=""
              className="serviceFieldsImgs"
              width={500}
              height={500}
            />
            <Image
              src={elevation2}
              alt=""
              className="serviceFieldsImgs"
              width={500}
              height={500}
            />
          </div>

          <div className="serviceFieldsImgFlexTwo">
            <Image
              src={elevation3}
              alt=""
              className="serviceFieldsImgs"
              width={500}
              height={500}
            />
            <Image
              src={elevation4}
              alt=""
              className="serviceFieldsImgs"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Elevation;
