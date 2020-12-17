import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { RightOutlined } from '@ant-design/icons';
import _ from 'lodash';

import {
  navLeftListXuexiao,
  navLeftListStu,
  navLeftListNews,
  navLeftListUnit,
  navLeftListBranch,
  navLeftListYuanxi,
  navLeftListAbout,
  navLeftListCareer,
} from '../../assets/constants';

import { getParam } from '../../../utils/url';
import './index.less';

const { pathToRegexp } = require("path-to-regexp");

export default function LeftNav({
  // list,
  firstText,
}) {
  let list = [];
  const location = useLocation();
  const history = useHistory();

  const [nowIndex, setNowIndex] = useState(0);
  const [listCopy, setListCopy] = useState(list);

  // secLNav 选择左侧的nav
  const secLNav = +getParam('secLNav');
  if (secLNav === 10) {
    list = navLeftListStu;
  } else if (secLNav == 11) {
    list = navLeftListXuexiao;
  } else if (secLNav == 12) {
    list = navLeftListNews;
  } else if (secLNav == 13) {
    list = navLeftListUnit;
  } else if (secLNav == 14) {
    list = navLeftListBranch;
  } else if (secLNav == 15) {
    list = navLeftListYuanxi;
  } else if (secLNav == 16) {
    list = navLeftListAbout;
  } else if (secLNav == 17) {
    list = navLeftListCareer;
  } else {
    list = [];
  }
  
  // 设置高亮
  useEffect(() => {
    const listc = _.cloneWith(list);
    console.log('listc')
    console.log(listc)
    listc.map((e, index) => {
      if (e.path) {
        const re = pathToRegexp(e.path.toLocaleLowerCase().split('?')[0]);
        if (re.exec(location.pathname.toLocaleLowerCase()) != null) {
          e.isActive = true;
          setNowIndex(index);
        } else {
          e.isActive = false;
        }
      }
    })

    setListCopy(listc);
  }, [location]);
  

  const navClick = (e) => {
    if (e.path) {
      history.push(e.path);
    }
  };

  return (
    <Fragment>
      {
        listCopy && listCopy.length > 0 && (
          <div className="navleft">
            <div className="navleft-now">
              {firstText || listCopy[nowIndex] && listCopy[nowIndex].text}
            </div>
            <div className="navleft-list">
              {
                listCopy.map((e, index) => {
                  return (
                    <div key={e.text} onClick={() => navClick(e)} className={`navleft-item ${e.isActive ? 'active' : ''}`}>
                      <div>{e.text}</div>

                      {
                        e.isActive && <RightOutlined />
                      }

                      {
                        e.tip && (
                          <div className="navleft-tip">{e.tip}</div>
                        )
                      }
                    </div>
                  );
                })
              }
            </div>
          </div>
        )
      }
    </Fragment>
  );
}