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
            <h3>Liên hệ</h3>
            <p>Email: thptnguyentraidng01@gmail.com</p>
            <p>Social Media:</p>
            
            {/* Logo Facebook */}
            <span>
              <i className="fa fa-facebook"></i>
            </span>
            
            {/* Logo Insta */}
            <span class="logo-footer">
              <i className="fa fa-instagram"></i>
            </span>

            {/* Logo Gmail */}
            <span class="logo-footer">
              <i className="fa fa-envelope"></i>
            </span>

            {/* Logo Twitter */}
            <span class="logo-footer">
              <i className="fa fa-twitter"></i>
            </span>
          </div>
          {/* Add more footer sections as needed */}
        </div>
      </div>
      <div className="footer-bottom">
           TRƯỜNG THPT NGUYỄN TRÃI - ĐÀ NẴNG
      </div>
    </footer>
  );
};

export default Footer;
