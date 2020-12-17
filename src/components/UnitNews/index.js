import React, { useState } from 'react';

import LoadWrap from '../LoadWrap';
import NewsItem from '../ItemNews';

import './index.less';

import HomeMore from '../HomeMore';

export default function UnitNews({
  list,
}) {
  const newsClick = (e) => {
    window.open(`/detailgonggao?id=${e.infoId}&secRNav=20`);
  };
  const newsListRender = list.slice(0, 4);
  return (
    <div className="unit-news normal-card">
      <div className="unit-title">
        <div className="home-title">
          就业新闻
        </div>
        <HomeMore link="/xinwen?headerNav=12&secLNav=13&category=C010101" />
      </div>
      <LoadWrap data={newsListRender}>
        {
          newsListRender.length > 0 && (
            <div className="normal-col">
              <div className="new-list-normal">
                {
                  newsListRender.map((e, index) => {
                    return <NewsItem hasTime={false} key={e.title} hasBefore={true} beforeType={2} hasHover={false} isTwoLine={true} pathName="detailgonggao" data={e} />
                  })
                }
              </div>
            </div>
          )
        }
      </LoadWrap>
    </div>
  );
}