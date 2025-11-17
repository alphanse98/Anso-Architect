"use client";

import Image from "next/image";

import callIcon from "../assets/Group 1888.svg";
import insta from "../assets/Group 1872.svg";
import whatsapp from "../assets/Group 1873.svg";
import pin from "../assets/Group 1874.svg";
import youtube from "../assets/walkthroughIcon.svg";
import fb from "../assets/Group 1871.svg";

export default function FooterSection() {
  return (
    <footer>
      <div className="headerContainer">
        <div className="FooterFlex">
          {/* ---------- SEND QUOTE SECTION ---------- */}
          <div className="FooterSendQuote">
            <h1 className="FooterHeadding fontFamily">Send Us a Quote!</h1>

            <input placeholder="Name" className="FooterInp" type="text" />
            <input
              placeholder="Phone Number"
              type="number"
              className="FooterInp"
            />
            <input placeholder="Email" className="FooterInp" type="email" />
            <textarea
              placeholder="Description"
              className="FooterInp"
            ></textarea>

            <button className="FooterBtn">Submit</button>
          </div>

          {/* ---------- ABOUT SECTION ---------- */}
          <div className="FooterAbout">
            <h1
              className="FooterAboutHeading FooterHeadding fontFamily"
              id="About"
            >
              About Us
            </h1>

            <p className="serviceFieldsParagraph FooterAboutParagraph">
              Welcome to our Architecture Visualization service! We help you see
              your ideas come to life with stunning visualizations. Our skilled
              team specializes in plan elevation, interior design, and more.
              Impress your clients and elevate your projects with our
              exceptional services.
            </p>

            <div>
              <div className="footerIconWraper">
                {/* <Image
                  src={callIcon}
                  alt="Call"
                  className="footerIcon"
                  width={30}
                  height={30}
                /> */}
                <span className="footerNumber fontFamily">883 815 3372</span>
              </div>
              <div className="footerIconWraper">
                {/* <Image src={callIcon} alt="Call" className="footerIcon" width={30} height={30} /> */}
                <span className="footerNumber fontFamily">
                  ansoarchitect@gmail.com
                </span>
              </div>

              <div className="FooterSocialMediaIcons">
                <Image
                  src={whatsapp}
                  alt="WhatsApp"
                  className="footerSocialMediaIcon"
                  width={30}
                  height={30}
                />
                <Image
                  src={insta}
                  alt="Instagram"
                  className="footerSocialMediaIcon"
                  width={30}
                  height={30}
                />
                <Image
                  src={fb}
                  alt="Facebook"
                  className="footerSocialMediaIcon"
                  width={30}
                  height={30}
                />
                <Image
                  src={pin}
                  alt="Pinterest"
                  className="footerSocialMediaIcon"
                  width={30}
                  height={30}
                />
                <Image
                  src={youtube}
                  alt="YouTube"
                  className="footerSocialMediaIcon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
