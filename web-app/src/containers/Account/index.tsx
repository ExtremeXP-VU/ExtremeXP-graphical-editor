import { useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

import { useAccountStore } from '../../stores/accountStore';

import logo from '../../assets/extremeXP_logo.png';

import './style.scss';

const Account = () => {
  const location = useLocation();
  const isLoginTag = location.pathname.includes('login');
  const loginSelectedClass = isLoginTag ? 'selected' : '';
  const registerSelectedClass = isLoginTag ? '' : 'selected';
  const navigate = useNavigate();
  const isLogin = useAccountStore((state) => state.isLogin);

  // If the user is already logged in, redirect to the repository page
  useEffect(() => {
    if (isLogin) {
      navigate('/dashboard/projects');
    } else {
      navigate('/account/login');
    }
  }, [navigate]);

  return (
    <>
      <div className="account">
        <div className="account__banner">
          <img src={logo} alt="logo" className="account__banner__logo" />
          <div className="account__banner__title">
            ExtremeXP Graphical Editor
          </div>
        </div>
        <div className="account__content">
          <div className="account__content__tabs">
            <Link to="/account/login">
              <button
                className={`account__content__tabs__tab ${loginSelectedClass}`}
              >
                Login
              </button>
            </Link>
            <Link to="/account/register">
              <button
                className={`account__content__tabs__tab ${registerSelectedClass}`}
              >
                Register
              </button>
            </Link>
          </div>
          <div className="account__content__form">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
