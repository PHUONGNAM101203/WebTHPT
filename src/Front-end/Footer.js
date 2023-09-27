// Footer.js
import React from "react";
import "../css/style.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social";
import '../bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section col-md-6 col-sm-12">
            <h3>Information</h3>
            <p>
              Nguyen Trai High School, 01 Phan Van Dinh, Lien Chieu District, Da Nang City
            </p>
          </div>

          <div className="footer-section col-md-6 col-sm-12">
            <h3>Contact</h3>
            <p>Email: thptnguyentraidng01@gmail.com</p>
            <p>Social Media:</p>
            
            <span>
              <i className="fa fa-facebook"></i>
            </span>
            
            <span className="logo-footer">
              <i className="fa fa-instagram"></i>
            </span>

            <span className="logo-footer">
              <i className="fa fa-envelope"></i>
            </span>

            <span className="logo-footer">
              <i className="fa fa-twitter"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} TRƯỜNG THPT NGUYỄN TRÃI - ĐÀ NẴNG
      </div>
    </footer>
  );
};

export default Footer;
