import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import LoadWrap from '../LoadWrap';
import NewsItem from '../ItemNews';

import './index.less';

import newsBeforeImg from '../../assets/images/new-before.png';
import HomeMore from '../HomeMore';

export default function HomeNews({
  // newsList
  list,
}) {
  const history = useHistory();
  const [ newsListRender, setNewsListRender ] = useState([]);

  useEffect(() => {
    const listData = list || [];

    setNewsListRender(listData.slice(0, 7));
  }, [list])
  return (
    <div className="home-news normal-card">
      <div className="news-title">
        <div className="home-title">
          <img src={newsBeforeImg} className="normal-title-before" alt="12312" />
          新闻公告
        </div>
        <HomeMore link="/gonggao?secLNav=12&category=C010102" />
      </div>
      <LoadWrap data={newsListRender}>
        <div className="normal-row">
          {/* <div onClick={() => {window.open(`/detailgonggao?id=${newsListRender[0].infoId}&secRNav=20`)}} className="news-first">
            {
              newsListRender[0] && newsListRender[0].picture && <img alt="" src={newsListRender[0].picture.url} />
            }
            <div className="text c-line-clamp1">
              {newsListRender[0]?.title}
            </div>
          </div> */}
          <div className="new-list-normal">
            {
              newsListRender.map((e, index) => <NewsItem pathName="detailgonggao" hasHover={true} key={e.title} hasTimeAfter={true} hasBefore={true} beforeType={2} isHot={true} data={e} />)
            }
          </div>
        </div>
      </LoadWrap>
    </div>
  );
}