import './widget.scss';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import ViewModuleRoundedIcon from '@mui/icons-material/ViewModuleRounded';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';

const Widget = ({ type }) => {
  //temporary data
  const amount = 100;
  const diff = 20;

  let data;
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <AccessibilityOutlinedIcon
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ViewModuleRoundedIcon
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earning',
        icon: (
          <CurrencyBitcoinOutlinedIcon
            className="icon"
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <CurrencyExchangeOutlinedIcon
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="parcentage positive">
          <ExpandLessOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
