import React, { useState, Fragment } from 'react';

import './index.less';

const hot = require('../../assets/images/news-top.png');
const nothot = require('../../assets/images/news-normal.png');

export default function ItemNews({
  data,
  hasBefore,
  hasTime,
  beforeType,
  onClick,
  pathName,
  hasTimeAfter,
  hasHover,
  isTwoLine,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick(data);
    } else {
      window.open(`/${pathName}?id=${data.infoId}&secRNav=20`);
    }
  }
  return (
    <div
      onClick={handleClick}
      key={data.infoId || data.title}
      className={`news-item ${hasHover ? 'hover-item' : ''} ${data.indexWeight > 0 ? 'news-item-ishot' : ''} news-item-before${beforeType}`}
    >
      {
        hasBefore && beforeType === 2 && (
          <div className="ishot">
            {
              data.indexWeight > 0
              ? <img alt="" src={hot} />
              : <img alt="" src={nothot} />
            }
          </div>
        )
      }

      {
        hasBefore && beforeType === 1 && (
          <div className="item-before">
          </div>
        )
      }
      {
        hasTime && (
          <div className="time">
            {data.time || data.publishDate}
          </div>
        )
      }
      <div className={`${isTwoLine ? 'c-line-clamp2' : 'c-line-clamp1'} title`}>
        {data.title}
      </div>
      {
        hasTimeAfter && (
          <div className="publish-time c-line-clamp1">
            {data.publishDate}
          </div>
        )
      }
    </div>
  );
}