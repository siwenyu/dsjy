import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import _ from 'lodash';

import './index.less';

import { navList, loginType, showSubNav } from './constants';


const subHot = require('../../assets/images/nav-hot.png');

const URLParse = require('url-parse');
const queryString = require('qs');

export default function Header() {

  const [nav, setNav] = useState([]);

  const history = useHistory();
  let location = useLocation();

  // 获取url高亮
  const urlObj = URLParse(window.location.href);
  const queryParams = queryString.parse(urlObj.query.replace('?', ''));
  let nowNavIndex = 0;
  if (queryParams.headerNav) {
    nowNavIndex = queryParams.headerNav - 10;
  }

  useEffect(() => {
    const navCopy = _.cloneDeepWith(navList);
    
    navCopy.forEach((e, index) => {
      if (index === nowNavIndex) {
        navCopy[index].isActive = true;
      } else {
        navCopy[index].isActive = false;
      }
    });
    setNav(navCopy);
  }, [location]);

  const login = (link) => {
    window.open(link);
  };

  const navClick = (e) => {
    console.log('点击了');
    console.log(e);
    if (e.text === '东师高师就业联盟网') {
      window.open(e.path);
    } else {
      history.push(e.path);
    }
  };

  const subNavClick = (event, item) => {
    event.stopPropagation();
    event.preventDefault();
    history.push(item.path);
  }

  return (
    <div className="header">
      <div className="first-line">
        {/* logo */}
        <div className="logo" onClick={() => history.push('/home')}></div>
        {/* 菜单 */}
        <div className="nav">
          {
            nav.map(e => {
              return (
                <div
                  key={e.text}
                  onClick={() => navClick(e)}
                  style={{ backgroundColor: e.color }}
                  className={`nav-item ${e.isActive ? 'active': ''}  ${e.isActive && e.list && e.list.length && showSubNav.indexOf(location.pathname) >= 0 ? 'show-subnav' : ''}`}
                >
                  {e.text}
                  {
                    e.isActive && (
                      <div className="active-border"></div>
                    )
                  }
                  

                  {
                    e.list && e.list.length > 0 && (
                      <div className={`subnav`}>
                        {
                          e.list.map(itemItem => {
                            return (
                              <div onClick={(event) => subNavClick(event, itemItem)} key={itemItem.text} className="subnav-item">
                                {
                                  itemItem.isHot && (
                                    <div className="subnav-hot"><img alt="" src={subHot} /></div>
                                  )
                                }
                                <div>{itemItem.text}</div>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  }

                  
                </div>
              )
            })
          }
        </div>
        {/* 登录 */}
        <div className="login">
          {
            loginType.map((e, index) => {
              return (
                <div key={e.text} onClick={() => login(e.link)} style={{ backgroundColor: e.color }} className={`login-item login-item${index + 1}`}>
                  <img alt="" src={e.icon} />
                  {e.text}
                </div>
              )
            })
          }
        </div>
      </div>

      
    </div>
  );
}