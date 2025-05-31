import React from "react";
import "./footer.css";
import amaz3_logo from "../../Assets/amaz3_logo.jpeg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerCont1">
          <div className="contentFooterTitle">Get To Know Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">About Us</div>
            <div className="contentFooterSubTitleCont">Careers</div>
            <div className="contentFooterSubTitleCont">Press Releases</div>
            <div className="contentFooterSubTitleCont">Amazon Science</div>
          </div>
        </div>

        <div className="footerCont1">
          <div className="contentFooterTitle">Connect With Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">AInstagram</div>
            <div className="contentFooterSubTitleCont">Twitter</div>
            <div className="contentFooterSubTitleCont">Facebook</div>
          </div>
        </div>

        <div className="footerCont1">
          <div className="contentFooterTitle">Make Money With US</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">Sell on Amazon</div>
            <div className="contentFooterSubTitleCont">
              Sell Under Amazon Accelerator
            </div>
            <div className="contentFooterSubTitleCont">
              Protect and Build Your Brand
            </div>
            <div className="contentFooterSubTitleCont">
              Amazon Global Selling
            </div>
            <div className="contentFooterSubTitleCont">
              Become an Affiliate
            </div>
            <div className="contentFooterSubTitleCont">
              Fulfilment By Amazon
            </div>
          </div>
        </div>

        <div className="footerCont1">
          <div className="contentFooterTitle">Lets Us Help You</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">What May I Help You?</div>
            <div className="contentFooterSubTitleCont">Your Account</div>
            <div className="contentFooterSubTitleCont">Returns Center</div>
            <div className="contentFooterSubTitleCont">Game Zone</div>
          </div>
        </div>
      </div>
      <div className="amazonImg">
        <img className="amazonImgFooter" src={amaz3_logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
