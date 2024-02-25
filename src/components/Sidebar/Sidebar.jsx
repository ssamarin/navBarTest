import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = () => {
    const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 15px;
    color: #7a7b85;
  
    .logo {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      color: #ff8c00;
      font-weight: 900;
      font-size: 16px;
  
      img {
        max-width: 50px;
        max-height: 50px;
      }
    }

    nav {
        display: flex;
        flex-direction: column;
        font-size: 15px;
        row-gap: 15px;
    
        .navLink {
          width: 100%;
          heigth: 100%
          display: flex;
          align-items: center;
          padding: 10px;
          border-radius: 20px;
          cursor: pointer;
          transition: 0.6s all;
    
          &:hover {
            color: #000;
            background-color: #c0c0c0;
          }
        }
        .routeTitle {
            margin-left: 15px;
        }
      }

      .navLink.navLink_active {
        color: #ff8c00;
        background-color: rgb(255 189 136 / 30%);
      
        &:hover {
            color: #ff8c00;
            background-color: rgb(255 189 136 / 30%);
        }
      }
    `;
    const [isOpened, setIsOpened] = useState(true);

    const toggleSidebar = () => {
        setIsOpened(prev => !prev);
    };

    const containerClassnames = isOpened ? 'sidebar opened' : 'sidebar';

    return (
        <div className={ containerClassnames }>
            <Aside>
                <div className="upperRoutesAndLogo">
                    <div className="logo">
                        <NavLink to={'/'}>
                            <img
                                src={ logo }
                                alt="TensorFlow logo"
                            />
                        </NavLink>
                        <span>TensorFlow</span>
                        <button onClick={ () => toggleSidebar() }>
                            <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' } />
                        </button>
                    </div>

                    <nav>
                        {
                            routes.map((route) => (
                                <NavLink to={route.path} className={({ isActive }) => isActive ? 'navLink navLink_active' : 'navLink'} key={ route.title }>
                                    <FontAwesomeIcon icon={ route.icon } />
                                    <span className="routeTitle">{ route.title }</span>
                                </NavLink>
                            ))
                        }
                    </nav>
                </div>

                <nav className="bottomRoutes">
                    {
                        bottomRoutes.map((route) => (
                            <NavLink to={route.path} className={({ isActive }) => isActive ? 'navLink navLink_active' : 'navLink'} key={ route.title }>
                                <FontAwesomeIcon icon={ route.icon } />
                                <span className="routeTitle">{ route.title }</span>
                            </NavLink>
                        ))
                    }
                </nav>
            </Aside>
        </div>
    );
}


export default Sidebar;
