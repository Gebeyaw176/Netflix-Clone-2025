import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-white ">
      <div className="container">
        <div className="row">
          <div className="col-12 footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6 ">
            <ul className="list-unstyled">
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 ">
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 ">
            <ul className="list-unstyled">
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 ">
            <ul className="list-unstyled">
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="row col-12 service_code">
          <p>Service Code</p>
        </div>

        <div className="row col-12 inc">
          <p>&copy; 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
