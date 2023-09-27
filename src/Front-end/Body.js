import React from 'react';
import '../css/style.css';
import room1 from '../img/thpt nguyen trai.png';
import room2 from '../img/thpt nguyen trai.png';
import room3 from '../img/thpt nguyen trai.png';
import room4 from '../img/thpt nguyen trai.png';
import '../bootstrap/dist/css/bootstrap.min.css';

const Body = () => {
  return (
      <section className="favorite-rooms">
        <h1 className="chu">Hoạt động nhà trường</h1>
        <div className="container">
          <div className="col-md-3 col-sm-12 room-card">
            <img src={room1} alt="Room 1" className="img-fluid" />
            <h5>Active 1</h5>
            <h6>Chào đón tân học sinh lớp 10</h6>
            <button className="btn btn-primary" type="submit">
              Tìm hiểu thêm
            </button>
          </div>

          <div className="col-md-3 col-sm-12 room-card">
            <img src={room2} alt="Room 2" className="img-fluid" />
            <h5>Active 2</h5>
            <h6>Chia lớp theo ban cho học sinh lớp 12</h6>
            <button className="btn btn-primary" type="submit">
              Tìm hiểu thêm
            </button>
          </div>

          <div className="col-md-3 col-sm-12 room-card">
            <img src={room3} alt="Room 3" className="img-fluid" />
            <h5>Active 3</h5>
            <h6>Cảnh báo mùa mưa bão</h6>
            <button className="btn btn-primary" type="submit">
              Tìm hiểu thêm
            </button>
          </div>

          <div className="col-md-3 col-sm-12 room-card">
            <img src={room4} alt="Room 4" className="img-fluid" />
            <h5>Active 4</h5>
            <h6>Lịch học các lớp phụ đạo</h6>
            <button className="btn btn-primary" type="submit">
              Tìm hiểu thêm
            </button>
          </div>
        </div>

      {/* Shared Rooms Section */}
      <section className="shared-rooms">
        <h1 className="chu">Sự kiện</h1>
        <div className="container">
          <div className="col-md-3 col-sm-12 room-card">
            <img src={room1} alt="Shared Room 1" className="img-fluid" />
            <h5>Event 1</h5>
            <h6>Hội khoẻ phù đổng</h6>
            <button className="btn btn-primary" type="submit">
            Tìm hiểu thêm
            </button>
          </div>

          <div className="col-md-3 col-sm-12 room-card">
            <img src={room2} alt="Shared Room 2" className="img-fluid" />
            <h5>Event 2</h5>
            <h6>Chào mừng ngày Phụ nữ Việt Nam (20-10)</h6>
            <button className="btn btn-primary" type="submit">
            Tìm hiểu thêm
            </button>
          </div>

          <div className="col-md-3 col-sm-12 room-card">
            <img src={room3} alt="Shared Room 3" className="img-fluid" />
            <h5>Event 3</h5>
            <h6>Chào mừng ngày Nhà giáo Việt Nam (20-11)</h6>
            <button className="btn btn-primary" type="submit">
              Tìm hiểu thêm
            </button>
          </div>

          <div className="col-md-3 col-sm-12 room-card">
            <img src={room4} alt="Shared Room 4" className="img-fluid" />
            <h6>Event 4</h6>
            <h6>Lễ tôn vinh học sinh xuất xắc</h6>
            <button className="btn btn-primary" type="submit">
            Tìm hiểu thêm
            </button>
          </div>

        </div>
      </section>
      </section>
  );
};

export default Body;
