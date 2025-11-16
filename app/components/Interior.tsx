import Image from "next/image";
import interior1 from "../assets/interior1.jpeg";
import interior2 from "../assets/interior2.jpeg";
import interior3 from "../assets/interior3.jpeg";
import interior4 from "../assets/interior4.jpg";

function Interior() {
  return (
    <div className="headerContainer">
      <section className="serviceFieldsFlex serviceFieldsOdd">
        {/* LEFT SIDE */}
        <div className="serviceFields">
          <h1 className="serviceFieldsHeading fontFamily" id="Interior">
            Interior
          </h1>

          <p className="serviceFieldsParagraph oddParagraph">
            Welcome to our interior design service! We specialize in creating
            captivating and functional interior designs that reflect your
            preferred style while harmonizing with your space. Prices start from
            1999.
          </p>

          <button className="HeaderDownloadBtn btnCetnre">View More</button>
        </div>

        {/* RIGHT SIDE IMAGE GRID */}
        <div className="serviceFieldsImgBOx">
          <div className="serviceFieldsImgFlexOne">
            <Image
              src={interior1}
              className="serviceFieldsImgs"
              alt="Interior Design 1"
            />
            <Image
              src={interior2}
              className="serviceFieldsImgs"
              alt="Interior Design 2"
            />
          </div>

          <div className="serviceFieldsImgFlexTwo">
            <Image
              src={interior3}
              className="serviceFieldsImgs"
              alt="Interior Design 3"
            />
            <Image
              src={interior4}
              className="serviceFieldsImgs"
              alt="Interior Design 4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Interior;
