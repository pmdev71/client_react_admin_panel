import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <GTranslateOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <Brightness4OutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <SubtitlesOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/12708081/pexels-photo-12708081.jpeg"
              alt="Google"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
