import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import List from '../../components/table/Table';
import './single.scss';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImage"
              />
              <div className="details">
                <h1 className="itemTitle">Palash Mandal</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">palash.cse@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+8801726066606</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={5 / 1} title={'User spending (Last 6 Months)'} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transections</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
