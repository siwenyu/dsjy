import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import { routeList } from '../../router';
import './index.less';


import { rightTopNavList } from '../../assets/constants';

const { pathToRegexp } = require("path-to-regexp");
const URLParse = require('url-parse');
const queryString = require('qs');

export default function RightTopNav({
  // list
}) {
  const location = useLocation();
  const urlObj = URLParse(window.location.href);
  const queryParams = queryString.parse(urlObj.query.replace('?', ''));

  const [navData, setNavData] = useState([]);
  useEffect(() => {
    if (rightTopNavList[queryParams.secRNav]) {
      setNavData(rightTopNavList[queryParams.secRNav]);
    } else {
      routeList.map((e, index) => {
        const re = pathToRegexp(e.path.toLocaleLowerCase().split('?')[0]);
        if (re.exec(location.pathname.toLocaleLowerCase()) != null) {
          setNavData(e.navData);
        }
      })
    }

    // 滚动到顶部
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }, [location]);

  return (
    <div className="right-top-nav">
      <span>
        首页 &nbsp; 
        {
          navData.length > 0 && (
            navData.map(e => {
            return <span key={e}> / &nbsp;{e}</span>;
            })
          )
        }
      </span>
    </div>
  );
}