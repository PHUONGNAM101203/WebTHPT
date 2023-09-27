import React, { useState } from 'react';
import '../css/style.css';
import logo from '../img/logo nguyen trai.png';
import '../bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdown1Open(!isDropdown1Open);
    setIsDropdown2Open(false);
    setIsDropdown3Open(false);
    setIsDropdown4Open(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdown1Open(false);
    setIsDropdown2Open(!isDropdown2Open);
    setIsDropdown3Open(false);
    setIsDropdown4Open(false);
  };

  const toggleDropdown3 = () => {
    setIsDropdown1Open(false);
    setIsDropdown2Open(false);
    setIsDropdown3Open(!isDropdown3Open);
    setIsDropdown4Open(false);
  };

  const toggleDropdown4 = () => {
    setIsDropdown1Open(false);
    setIsDropdown2Open(false);
    setIsDropdown3Open(false);
    setIsDropdown4Open(!isDropdown4Open);
  };

  const handleLogoClick = () => {
    window.location.href = "http://localhost:3000/";
  };

  return (
    <div className="navbar">
      <a href="#About">Trang chủ</a>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown1}
        >
          Giới thiệu
        </button>
        <div className={`dropdown-menu ${isDropdown1Open ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
          <a className="dropdown-item" href="#canbo">Cán bộ trường</a>
          <a className="dropdown-item" href="#giaovien">Giáo viên</a>
          <a className="dropdown-item" href="#khoi10">Khối 10</a>
          <a className="dropdown-item" href="#khoi11">Khối 11</a>
          <a className="dropdown-item" href="#khoi12">Khối 12</a>
        </div>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle" 
          type="button"
          onClick={toggleDropdown2}
        >
          Thông báo
        </button>
        <div className={`dropdown-menu ${isDropdown2Open ? 'show' : ''}`} aria-labelledby="dropdownMenuButton4">
          <a className="dropdown-item" href="#lichhoc">Lịch học</a>
          <a className="dropdown-item" href="#inyear">Trong năm học</a>
        </div>
      </div>

      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown3}
        >
          Tài nguyên
        </button>
        <div className={`dropdown-menu ${isDropdown3Open ? 'show' : ''}`} aria-labelledby="dropdownMenuButton2">
          <a className="dropdown-item" href="#giaoan">Giáo án</a>
          <a className="dropdown-item" href="#tkb">Thời khoá biểu</a>
        </div>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown4}
        >
          Thư viện
        </button>
        <div className={`dropdown-menu ${isDropdown4Open ? 'show' : ''}`} aria-labelledby="dropdownMenuButton3">
          <a className="dropdown-item" href="#sgk">Sách giáo khoa</a>
          <a className="dropdown-item" href="#asgk">Các loại sách khác</a>
        </div>
      </div>

      <a href="#About">Thủ tục</a>
    </div>
  );
};

export default Navbar;
