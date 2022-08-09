import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import SendTimeExtensionOutlinedIcon from '@mui/icons-material/SendTimeExtensionOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">devEkattor</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <AccessibilityOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <EventOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <SendTimeExtensionOutlinedIcon className="icon" />
            <span>Delivary</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SystemSecurityUpdateGoodOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <MonitorHeartOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AssignmentIndOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorPoint"></div>
        <div className="colorPoint"></div>
      </div>
    </div>
  );
};

export default Sidebar;
